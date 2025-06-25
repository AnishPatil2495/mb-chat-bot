import { useState } from "react";
import ChatBot from "./components/ChatBot";
import { Flow } from "./types/Flow";
import { Params } from "./types/Params";

function App() {
	const [name, setName] = useState("")

	// Serves as an example flow used during the development phase - covers all possible attributes in a block.
	// restore to default state before running selenium tests (or update the test cases if necessary)!
	const flow: Flow = {
		start: {
			message: "Hello! What is your name?",
			path: "show_name",
		},
		show_name : {
			message: (params: Params) => `Hey ${params.userInput}! Nice to meet you.`,
			function: (params: Params) => setName(params.userInput),
			chatDisabled: true,
			transition: {duration: 1000},
			path: "ask_age_group",
		},
		ask_age_group: {
			message: () => `Hey ${name}!, Your account got verified, May i know your age group?`,
			options: ["child", "teen", "adult"],
			chatDisabled: true,
			path: () => "start",
		},
		incorrect_answer: {
			message: "Your answer is incorrect, try again!",
			transition: {duration: 0},
			path: (params: Params) => params.prevPath
		},
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: `calc(20vh)`}}>
					<ChatBot
						id="chatbot-id"
						flow={flow}
						settings={{
							audio: {disabled: false},
							chatInput: {botDelay: 1000},
							userBubble: {showAvatar: true},
							botBubble: {showAvatar: true},
							voice: {disabled: false},
							sensitiveInput: {asterisksCount: 6},
						}}
					></ChatBot>
				</div>
			</header>
		</div>
	);
}

export default App;