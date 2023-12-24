import ReactDOM from "react-dom/client";
import TranslateProvider from "@app/providers/translation.provider.tsx";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./app/routes/app.route.tsx";
import { Suspense } from "react";
import Backdrop from "@shared/ui/backdrop.tsx";
import Spinner from "@shared/ui/spinner.tsx";
import { AuthProvider } from "@app/providers/auth.provider.tsx";
import { QuickViewProvider } from "@app/providers/quick-view.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense
    fallback={
      <Backdrop>
        <Spinner />
      </Backdrop>
    }
  >
    <TranslateProvider>
      <AuthProvider>
        <QuickViewProvider>
          <RouterProvider router={appRoute} />
        </QuickViewProvider>
      </AuthProvider>
    </TranslateProvider>
  </Suspense>,
);
