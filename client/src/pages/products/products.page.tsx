import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import ProductCard from "@shared/ui/product-card.tsx";
import apiService from "@app/service/api.service.ts";
import { ProductType } from "@shared/types/product.types.ts";
import Spinner from "@shared/ui/spinner.tsx";
import Backdrop from "@shared/ui/backdrop.tsx";

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

  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    apiService.getProductsByCategory(currentCategory!).then((res) => {
      if (res.data as ServerResponse) {
        setProducts(res.data.products);
      }
    });
  }, [currentCategory]);

  if (!products) {
    return (
      <Backdrop>
        <Spinner />
      </Backdrop>
    );
  }

  return (
    <Fragment>
      <div className="py-[30px]">
        <h3>{t?.categories[currentCategory as never]}</h3>
        <p className="mt-2 text-[14px] text-[--gray]">
          {`${products.length} ${t?.market.goods.toLowerCase()}`}
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-[24px] bp834:grid-cols-2">
        {products?.map((p) => (
          <li key={p._id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ProductsPage;
