import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { HomePage } from "@pages/home/home.async";
import { NotFound } from "@pages/404/not-found.async";
import { Auth } from "@pages/auth/auth.async.ts";
import { Links } from "@shared/types/enums/links.ts";

export const appRoute = createBrowserRouter([
  {
    path: Links.HOME,
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: Links.AUTH,
        element: <Auth />,
      },
      {
        path: Links.ABOUT,
        element: <Auth />,
      },
      {
        path: Links.BLOG,
        element: <Auth />,
      },
      {
        path: Links.CONTACTS,
        element: <Auth />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
