import React from "react";
import ReactDOM from "react-dom";

//import { Dashboard } from "./components/blockChainDashboard";
import { AppMain } from "./appMain";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>,
  rootElement
);
