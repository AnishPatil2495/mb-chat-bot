import ReactDOM from "react-dom/client";
import App from "./App";
// create this or import your config

const containerId = "my-react-bot-container";
let container = document.getElementById(containerId);
if (!container) {
  container = document.createElement("div");
  container.id = containerId;
  document.body.appendChild(container);
}

const root = ReactDOM.createRoot(container);
root.render(
  <App/>
);