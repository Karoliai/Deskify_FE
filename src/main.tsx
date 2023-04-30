import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashbord/Dashboard";

export const AuthContext = createContext(
  () =>
    JSON.parse(localStorage.getItem("isAdmin") || `{"isAdmin": "false"}`) as {
      isAdmin: boolean;
    }
);

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContext.Provider
      value={() =>
        JSON.parse(localStorage.getItem("isAdmin") || `{"isAdmin": "false"}`)
      }
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>
);
