import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import ProductCard from "@shared/ui/product-card/product-card.tsx";
import apiService from "@app/service/api.service.ts";
import { ProductType } from "@shared/types/product.types.ts";
import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "@context/loading.context.ts";
import ProductCardSkeleton from "@shared/ui/product-card/product-card-skeleton.tsx";
import Paginate from "@features/ui/paginate.tsx";

type ServerResponse = {
  status: number;
  message: string;
  count: number;
  products: ProductType[];
};

function ProductsPage() {
  const { category } = useParams();
  const currentCategory = category?.replaceAll("-", " ");
  const { loading, setLoading } = useContext(LoadingContext);
  const { t } = useContext(LanguageContext);

  const [data, setData] = useState<ServerResponse | unknown>({});
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  useEffect(() => {
    setLoading(true);
    apiService
      .getProductsByCategory(currentCategory!, {
        page: page - 1,
        limit: itemsPerPage,
      })
      .then((res) => {
        if (res.data as ServerResponse) {
          setData(res.data);
          setTimeout(() => setLoading(false), 800);
        }
      });
  }, [currentCategory, page]);

  const { count, products } = data as ServerResponse;

  const countOfPages = Math.ceil(count / itemsPerPage);

  return (
    <Fragment>
      <div className="py-[30px]">
        {loading ? (
          <Fragment>
            <Skeleton className="max-w-[150px] p-2" />
            <Skeleton className="mt-2 max-w-[120px]" />
          </Fragment>
        ) : (
          <Fragment>
            <h3>{t?.categories[currentCategory as never]}</h3>
            <p className="mt-2 text-[14px] text-[--gray]">
              {`${count} ${t?.market.goods.toLowerCase()}`}
            </p>
          </Fragment>
        )}
      </div>
      <ul className="grid grid-cols-3 gap-[24px] bp834:grid-cols-2">
        {loading
          ? Array.from({ length: 6 })
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
        <Paginate countOfPages={countOfPages} page={page} setPage={setPage} />
      )}
    </Fragment>
  );
}

export default ProductsPage;
