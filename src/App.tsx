import { useState } from "react";
import ChatBot from "./components/ChatBot";
import { Flow } from "./types/Flow";
import { Params } from "./types/Params";
import { askNursingQuestion } from "./services/ApiServices/nursingServices";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState<any>("");

  const NursingBotApiCall = async (params: Params) => {
    try {
      const response = await askNursingQuestion(params.userInput);
      setResponse(response);
      params.injectMessage(response?.response || "No response yet.", "bot");
      params.goToPath("show_name");
    } catch (error) {
      console.error("Error calling Nursing Bot API:", error);
    }
  };
  // Serves as an example flow used during the development phase - covers all possible attributes in a block.
  // restore to default state before running selenium tests (or update the test cases if necessary)!
  const flow: Flow = {
    start: {
      message: "Hello! What Can I Help You With?",
      function: (params: Params) => {
        NursingBotApiCall(params);
      },
    },
    show_name: {
      function: (params: Params) => {
        NursingBotApiCall(params);
      },
    },
    incorrect_answer: {
      message: "Your answer is incorrect, try again!",
      transition: { duration: 0 },
      path: (params: Params) => params.prevPath,
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: `calc(20vh)`,
          }}
        >
          <ChatBot
            id="chatbot-id"
            flow={flow}
            settings={{
              audio: { disabled: false },
              chatInput: { botDelay: 1000 },
              userBubble: { showAvatar: true },
              botBubble: { showAvatar: true },
              voice: { disabled: false },
              sensitiveInput: { asterisksCount: 6 },
            }}
          ></ChatBot>
        </div>
      </header>
    </div>
  );
}

export default App;
