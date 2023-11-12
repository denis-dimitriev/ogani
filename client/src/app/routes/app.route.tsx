import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { HomePage } from "@pages/home/home.async";
import { NotFound } from "@pages/404/not-found.async";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
