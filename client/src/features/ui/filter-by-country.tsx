import Skeleton from "react-loading-skeleton";
import { ArrowIco, MinusIco, PlusIco } from "@app/assets/icons";
import { useContext, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { LoadingContext } from "@context/loading.context.ts";
import { ProductType } from "@shared/types/product.types.ts";
import { removeDuplicates } from "@shared/helpers/removeDublicate.ts";

interface Props {
  products: ProductType[];
}

function FilterByCountry({ products }: Props) {
  const { t, language } = useContext(LanguageContext);
  const { loading } = useContext(LoadingContext);
  const [open, setOpen] = useState(true);
  const [shortedMenu, setShortedMenu] = useState(true);

  function getCountries(products: ProductType[]) {
    const countries = removeDuplicates(
      products?.map((p) => p.info.manufacturer[language]),
    );

    return countries.map((c) => {
      let count = 0;
      products.map((p) => {
        if (p.info.manufacturer[language] === c) {
          count++;
        }
      });

      return { country: c, count };
    });
  }

  const countries = getCountries(products);
  const listHeight = countries.length * 29;

  const onToggleHandler = () => setOpen(!open);

  return loading ? (
    <div className="flex flex-col">
      <Skeleton className="p-1.5" />
      <div className="pl-[24px]">
        <Skeleton className="mt-[30px]" />
        <Skeleton className="mt-[15px]" count={2} />
        <div className="px-[50px]">
          <Skeleton className="mt-[15px]" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <button
        type="button"
        className="flex w-full justify-between py-1 font-medium transition hover:bg-[--light]"
        onClick={onToggleHandler}
      >
        {t?.filter["by country"]}
        <ArrowIco
          className={`${open ? "rotate-0" : "-rotate-90"} scale-90 transition`}
        />
      </button>
      <div
        className={`${
          open ? "appearance h-auto" : "h-0"
        } flex flex-col p-2 text-[14px]`}
      >
        <ul
          className={`overflow-hidden transition-all duration-300`}
          style={{
            height: shortedMenu ? "90px" : `${listHeight}px`,
          }}
        >
          {countries?.map((el) => (
            <li
              key={el.country}
              className="flex cursor-pointer justify-between p-1 hover:text-[--gray]"
            >
              {el.country}
              <span>({el.count})</span>
            </li>
          ))}
        </ul>
        <button
          className={`${!open && "hidden"}
              "hover:bg-[--light]" flex w-full items-center justify-center transition
            `}
          onClick={() => setShortedMenu(!shortedMenu)}
        >
          {shortedMenu ? (
            <>
              <PlusIco className="scale-[0.4]" />
              {t?.filter["show more"]}
            </>
          ) : (
            <>
              <MinusIco className="scale-[0.4]" />
              {t?.filter["show less"]}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default FilterByCountry;
