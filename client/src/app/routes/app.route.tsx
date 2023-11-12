import { createBrowserRouter } from "react-router-dom";
import App from "../app.tsx";
import HomePage from "@pages/home/home.page.tsx";
import NotFound from "@pages/404/not-found.tsx";

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
