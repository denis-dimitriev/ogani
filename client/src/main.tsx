import ReactDOM from "react-dom/client";
import TranslateProvider from "@app/providers/translation.provider.tsx";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./app/routes/app.route.tsx";
import { Suspense } from "react";
import Backdrop from "@shared/ui/backdrop.tsx";
import Spinner from "@shared/ui/spinner.tsx";
import { AuthProvider } from "@app/providers/auth.provider.tsx";
import { QuickViewProvider } from "@app/providers/quick-view.provider.tsx";
import { HeaderScrollProvider } from "@app/providers/header-scroll.provider.tsx";
import { CategoriesMenuProvider } from "@app/providers/categories-menu.provider.tsx";
import { MiniCartProvider } from "@app/providers/mini-cart.provider.tsx";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense
    fallback={
      <Backdrop>
        <Spinner />
      </Backdrop>
    }
  >
    <TranslateProvider>
      <HeaderScrollProvider>
        <CategoriesMenuProvider>
          <AuthProvider>
            <QuickViewProvider>
              <MiniCartProvider>
                <SkeletonTheme baseColor="#e2e2e2" highlightColor="#fff">
                  <RouterProvider router={appRoute} />
                </SkeletonTheme>
              </MiniCartProvider>
            </QuickViewProvider>
          </AuthProvider>
        </CategoriesMenuProvider>
      </HeaderScrollProvider>
    </TranslateProvider>
  </Suspense>,
);
