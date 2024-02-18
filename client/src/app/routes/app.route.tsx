import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { HomePage } from "@pages/home/home.page.async.ts";
import { NotFound } from "@pages/404/not-found.page.async.ts";
import { Auth } from "@pages/auth/auth.page.async.ts";
import { LINKS } from "@shared/types/enums/links.ts";
import Protected from "@pages/protected.tsx";
import { UserProfile } from "@pages/user-profile/user-profile.page.async.ts";
import Guest from "@pages/guest.tsx";
import { Market } from "@pages/market/market.page.async.ts";
import ProductsPage from "@pages/products/products.page.tsx";

export const appRoute = createBrowserRouter([
  {
    path: LINKS.HOME,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: LINKS.MARKET,
        element: <Market />,
      },
      {
        path: LINKS.MARKET_CATEGORY,
        element: <ProductsPage />,
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
        element: <Guest />,
        children: [
          {
            path: LINKS.AUTH,
            element: <Auth />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
