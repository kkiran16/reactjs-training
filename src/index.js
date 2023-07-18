import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

import reportWebVitals from "./reportWebVitals";
// import App from "./02-react-hooks/UseState/01-UseState";
// import App from "./02-react-hooks/UseEffect/01-UseEffect";
// import App from "./02-react-hooks/UseEffect/02-UseEffectCleanUp";
// import App from "./02-react-hooks/ReactFlow/01-reactFlow";
// import App from "./02-react-hooks/UseState/02-LiftingState";
// import App from "./02-react-hooks/UseRef/01-useRef";
// import App from "./02-react-hooks/UseRef/02-useRef-dom";
// import App from "./02-react-hooks/UseRef/02-useRef-dom";
// import App from "./02-react-hooks/UseReducer/00-UseReducerProblemStatement";
// import App from "./02-react-hooks/UseReducer/01-UseReducer";

import App from "./02-react-hooks/UseCallback/02-Counter/Counter";
// import App from "./02-react-hooks/UseCallback/01-SlowApplication/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
