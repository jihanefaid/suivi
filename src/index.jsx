import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ListePatient from "./components/Pages/ListePatient";
import PageAccueil from "./components/Pages/PageAccueil";
import ModifierPatient from "./components/Pages/ModifierPatient";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <PageAccueil/>,
  },
  {
    path: "/Patients",
    element: <ListePatient />,
  },
  {
    path: "/Modifier",
    element: <ModifierPatient />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
