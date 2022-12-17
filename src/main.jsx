import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

document.fonts.ready.then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <div className="dark:bg-darkSecondary dark:text-lightPrimary bg-lightPrimary text-lightModeText min-h-screen font-san">
        <App />
      </div>
    </React.StrictMode>
  )
);
