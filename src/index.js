import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div>
      <Helmet>
        <title>Teaming</title>
      </Helmet>
    </div>
  </React.StrictMode>
);
