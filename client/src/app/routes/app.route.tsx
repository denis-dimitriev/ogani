import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { HomePage } from "@pages/home/home.async";
import { NotFound } from "@pages/404/not-found.async";
import { Auth } from "@pages/auth/auth.async.ts";
import { LINKS } from "@shared/types/enums/links.ts";
import Protected from "@pages/protected.tsx";
import { UserProfile } from "@pages/user-profile/user-profile.auth.ts";
import Guest from "@pages/guest.tsx";

export const appRoute = createBrowserRouter([
  {
    path: LINKS.HOME,
    element: <App />,
    children: [
      {
        element: <Guest />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: LINKS.AUTH,
            element: <Auth />,
          },
          {
            element: <Protected />,
            children: [
              {
                path: LINKS.USER,
                element: <UserProfile />,
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);
