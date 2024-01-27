import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import FAQ from "./Pages/FAQ";
import Cancel from "./Pages/Cancel";
import Reservations from "./Pages/Reservation";
import AboutUs from "./Pages/AboutUs";
import EmployeeDetails from "./Pages/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />,
  },
  {
    path: "Reservations",
    element: <Reservations />,
  },
  {
    path: "Cancel",
    element: <Cancel />,
  },
  {
    path: "EmployeeDetails/:employeeID",
    element: <EmployeeDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
