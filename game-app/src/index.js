import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Game";
import Modal from "./Modal";
import SignInUp from "./SignInUp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Modal />
    <SignInUp />
  </React.StrictMode>,
  document.getElementById("root")
);
