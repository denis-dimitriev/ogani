import { Fragment, useContext, useEffect, useState } from "react";
import { ProductType } from "@shared/types/product.types.ts";
import apiService from "@app/service/api.service.ts";
import ProductCardSkeleton from "@shared/ui/product-card/product-card-skeleton.tsx";
import ProductCard from "@shared/ui/product-card/product-card.tsx";
import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "@context/loading.context.ts";
import { LanguageContext } from "@context/language.context.ts";

type ServerResponse = {
  status: number;
  message: string;
  count: number;
  products: ProductType[];
};

function MarketPage() {
  const [data, setData] = useState<ServerResponse | unknown[]>([]);
  const { t } = useContext(LanguageContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    apiService
      .getProducts()
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setTimeout(() => setLoading(false), 800);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const { count, products } = data as ServerResponse;

  return (
    <div className="container">
      <Fragment>
        <div className="py-[30px]">
          {loading ? (
            <Fragment>
              <Skeleton className="max-w-[150px] p-2" />
              <Skeleton className="mt-2 max-w-[120px]" />
            </Fragment>
          ) : (
            <Fragment>
              <h3>Market</h3>
              <p className="mt-2 text-[14px] text-[--gray]">
                {`${count} ${t?.market.goods.toLowerCase()}`}
              </p>
            </Fragment>
          )}
        </div>
        <ul className="grid grid-cols-4 gap-[24px] bp834:grid-cols-2">
          {loading
            ? Array.from({ length: 8 })
                .fill(6)
                .map((_, i) => (
                  <li key={i + 1}>
                    <ProductCardSkeleton />
                  </li>
                ))
            : products?.map((p) => (
                <li key={p._id}>
                  <ProductCard product={p} />
                </li>
              ))}
        </ul>
      </Fragment>
    </div>
  );
}

export default MarketPage;
