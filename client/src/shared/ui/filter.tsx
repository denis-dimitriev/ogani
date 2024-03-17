import { ArrowIco, FilterIco } from "@app/assets/icons";
import { observer } from "mobx-react-lite";
import { ProductType } from "@shared/types/product.types.ts";
import { removeDuplicates } from "@shared/helpers/removeDublicate.ts";
import { useContext, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";

interface Props {
  products: ProductType[];
}

const Filter = observer(function ({ products }: Props) {
  const { t, language } = useContext(LanguageContext);

  const countries = removeDuplicates(
    products?.map((p) => {
      if (language === "ro") {
        return p.info.manufacturer.ro;
      } else {
        return p.info.manufacturer.ru;
      }
    }),
  );

  const [open, setOpen] = useState(true);

  const onToggleHandler = () => setOpen(!open);

  return (
    <div className="flex flex-col gap-[30px] text-[--darkest]">
      <div className="flex items-center justify-center">
        <button>
          <FilterIco className="scale-75" />
        </button>
        <h6 className="font-medium uppercase tracking-wide">
          {t?.filter.filter}
        </h6>
      </div>
      <div className="flex flex-col">
        <button
          type="button"
          className="flex w-full justify-between py-1 font-medium transition hover:bg-[--light]"
          onClick={onToggleHandler}
        >
          {t?.filter["by country"]}
          <ArrowIco
            className={`${
              open ? "rotate-0" : "-rotate-90"
            } scale-90 transition`}
          />
        </button>
        <ul
          className={`${
            open ? "appearance h-auto " : "h-0 overflow-hidden"
          } flex flex-col p-2 text-[14px]`}
        >
          {countries?.map((c) => (
            <li key={c} className="flex justify-between p-1">
              <button className="hover:text-[--gray]">{c}</button>
              <span>(5)</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Filter;
