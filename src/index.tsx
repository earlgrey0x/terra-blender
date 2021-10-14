import React from "react";
import ReactDOM from "react-dom";
import { App } from "./domain/App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals(
  process.env.NODE_ENV !== "production" ? console.log : undefined
);
