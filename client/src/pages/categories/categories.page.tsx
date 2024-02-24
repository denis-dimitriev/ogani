import { Fragment, useContext } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { Outlet } from "react-router-dom";
import CategoriesMenu from "@widgets/categories-menu.tsx";
import ProductQuickView from "@features/ui/product-quick-view.tsx";

function CategoriesPage() {
  const { view } = useContext(QuickViewContext);

  return (
    <Fragment>
      <div className="container relative">
        <div className="flex gap-x-[24px]">
          <div className="col-sm">
            <CategoriesMenu />
          </div>

          <div className="col-xl">
            <Outlet />
          </div>
        </div>
      </div>
      {view && <ProductQuickView />}
    </Fragment>
  );
}

export default CategoriesPage;
