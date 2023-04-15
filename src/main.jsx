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
import { Profile } from "./pages/Profile";
import  ErrorPage  from "./pages/ErrorPage";
import Summary from "./components/Consultation/Summary";
import VideoPage from "./pages/VideoPage";
import global from 'global'
import * as process from "process";
global.process = process;

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
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/Video',
        element: <VideoPage />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);