import { FilterIco } from "@app/assets/icons";
import { observer } from "mobx-react-lite";
import { ProductType } from "@shared/types/product.types.ts";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { LoadingContext } from "@context/loading.context.ts";
import Skeleton from "react-loading-skeleton";
import FilterByCountry from "@features/ui/filter-by-country.tsx";

interface Props {
  products: ProductType[];
}

const MainFilter = observer(function ({ products }: Props) {
  const { t } = useContext(LanguageContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div className="flex flex-col gap-[30px] text-[--darkest]">
      {loading ? (
        <div className="px-[50px]">
          <Skeleton className="p-3" />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button>
            <FilterIco className="scale-75" />
          </button>
          <h6 className="font-medium uppercase tracking-wide">
            {t?.filter.filter}
          </h6>
        </div>
      )}
      <FilterByCountry products={products} />
    </div>
  );
});

export default MainFilter;
