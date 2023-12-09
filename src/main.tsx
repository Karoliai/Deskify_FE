import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reservation from "./pages/Reservation/Reservation";

export const AuthContext = createContext(
  () =>
    JSON.parse(localStorage.getItem("isAdmin") || `{"isAdmin": "false"}`) as {
      isAdmin: string;
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
  {
    path: "reservation/:reservationId",
    element: <Reservation />,
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
