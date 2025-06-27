import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import useAuthStore from "./store/useAuthStore";

const token = localStorage.getItem("token");
if (token) {
  useAuthStore.getState().login({ user: null, token });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
