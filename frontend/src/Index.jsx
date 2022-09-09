import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import UserContextProvider from "./app/context/UserContext";
import MainContextProvider from "./app/context/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <MainContextProvider>
        <Router>
          <App />
        </Router>
      </MainContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
