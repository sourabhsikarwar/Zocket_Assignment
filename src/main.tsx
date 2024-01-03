import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CampaignProvider } from "./contexts/campaignContext.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement || document.createElement("div")).render(
  <React.StrictMode>
    <CampaignProvider>
      <App />
    </CampaignProvider>
  </React.StrictMode>
);
