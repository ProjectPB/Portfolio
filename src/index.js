import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { init } from "@emailjs/browser";
import "./index.css";

init("user_oLUpPMIC5F8v3LfbSPTit");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
