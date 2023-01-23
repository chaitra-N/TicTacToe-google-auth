import React from "react";
import "./index.css";
import App from "./Home.js";
import Modal from "./GameComponents/Modal.js";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Modal />
  </BrowserRouter>
);
