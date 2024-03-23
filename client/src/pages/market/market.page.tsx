import { Fragment, useContext, useEffect, useState } from "react";
import { ProductType } from "@shared/types/product.types.ts";
import apiService from "@app/service/api.service.ts";
import ProductCardSkeleton from "@shared/ui/product-card/product-card-skeleton.tsx";
import ProductCard from "@shared/ui/product-card/product-card.tsx";
import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "@context/loading.context.ts";
import { LanguageContext } from "@context/language.context.ts";
import Paginate from "@features/ui/paginate.tsx";
import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainFilter from "@shared/ui/main-filter.tsx";

type ServerResponse = {
  status: number;
  message: string;
  count: number;
  products: ProductType[];
  allProducts: ProductType[];
};

function MarketPage() {
  const [data, setData] = useState<ServerResponse | unknown>({});
  const { t } = useContext(LanguageContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [page, setPage] = useState(1);

  const itemsPerPage = 18;

  useEffect(() => {
    setLoading(true);
    apiService
      .getProducts({ page: page - 1, limit: itemsPerPage })
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setTimeout(() => setLoading(false), 800);
        }
      })
      .catch((err) => console.log(err));
  }, [setLoading, page]);

  const { count, products, allProducts } = data as ServerResponse;

  const countOfPages = Math.ceil(count / itemsPerPage);

  return (
    <div className="container relative">
      <div className="flex gap-[24px]">
        <div className="col-sm">
          <CategoriesMenu />
          <MainFilter products={allProducts} />
        </div>
        <div className="col-xl">
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
          </Fragment>
          <ul className="four-items-list">
            {loading
              ? Array.from({ length: itemsPerPage })
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
          {!loading && (
            <Paginate
              countOfPages={countOfPages}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MarketPage;
