import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Medicine } from "./pages/Medicine";
import { Consultation } from "./pages/Consultation";
import { FindDoctor } from "./pages/FindDoctor";
import  ErrorPage  from "./pages/ErrorPage";
import Summary from "./components/Consultation/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/consultation",
        element: <Consultation />,
      },
      {
        path: "/medicine",
        element: <Medicine />,
      },
      {
        path: "/find",
        element: <FindDoctor />,
      },
      {
        path: '/consultation/summary',
        element: <Summary />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);