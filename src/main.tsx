import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";

export const AuthContext = createContext(
  () =>
    JSON.parse(localStorage.getItem("isAdmin") || `{"isAdmin": "false"}`) as {
      isAdmin: boolean;
    }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider
      value={() =>
        JSON.parse(localStorage.getItem("isAdmin") || `{"isAdmin": "false"}`)
      }
    >
      <Login />
    </AuthContext.Provider>
  </React.StrictMode>
);
