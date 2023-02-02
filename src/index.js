import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TezosProvider } from "./context/TezosContext";

ReactDOM.render(
  <React.StrictMode>
    <TezosProvider>
      <App />
    </TezosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
