import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Home.js";
import Modal from "./Modal";
import SignInUp from "./SignInUp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Modal />
  </React.StrictMode>,
  document.getElementById("root")
);
