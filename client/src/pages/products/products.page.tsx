import { useLocation, useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import ProductCard from "@shared/ui/product-card.tsx";
import apiService from "@app/service/api.service.ts";
import { ProductType } from "@shared/types/product.types.ts";
import Spinner from "@shared/ui/spinner.tsx";
import ProductQuickView from "@features/ui/product-quick-view.tsx";
import { QuickViewContext } from "@context/quick-view.context.ts";
import CategoriesMenu from "@widgets/categories-menu.tsx";

type ServerResponse = {
  status: number;
  message: string;
  length: number;
  products: ProductType[];
};

function ProductsPage() {
  const { category } = useParams();
  const currentCategory = category?.replaceAll("-", " ");

  const { t } = useContext(LanguageContext);
  const { view } = useContext(QuickViewContext);

  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    apiService.getProductsByCategory(currentCategory!).then((res) => {
      if (res.data as ServerResponse) {
        setProducts(res.data.products);
      }
    });
  }, [currentCategory]);

  if (!products) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="container relative">
        <h2 className="py-[30px]">{t?.categories[currentCategory as never]}</h2>
        <div className="flex gap-x-[24px]">
          <div className="col-sm">
            <CategoriesMenu />
          </div>

          <div className="col-xl">
            <ul className="grid grid-cols-3 gap-[24px]">
              {products?.map((p) => (
                <li key={p._id}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {view && <ProductQuickView />}
    </Fragment>
  );
}

export default ProductsPage;
