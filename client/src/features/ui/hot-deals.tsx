import { useContext } from "react";
import { ArrowIco } from "@app/assets/icons";
import ProductCard from "@shared/ui/product-card.tsx";
import { IProduct } from "@shared/ui/product-card-sm.tsx";
import { LanguageContext } from "@context/language.context.tsx";
import { useSlider } from "@shared/helpers/slider.hook.ts";

interface Props {
  products: IProduct[];
}

function HotDeals({ products }: Props) {
  const { t } = useContext(LanguageContext);
  const { pos, next, prev } = useSlider(products.length - 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h5>{t?.common["hot deals"]}</h5>
        <div className="flex items-center justify-center">
          <button onClick={prev}>
            <ArrowIco className="rotate-[90deg] scale-125" />
          </button>
          <button onClick={next}>
            <ArrowIco className="rotate-[-90deg] scale-125" />
          </button>
        </div>
      </div>
      <div className="flex">
        <ul className="flex overflow-hidden">
          {products.map((p) => (
            <li
              key={p._id}
              className="transition duration-700"
              style={{
                transform: `translateX(${pos}%)`,
              }}
            >
              <ProductCard product={p} />

              <div className="mt-3 flex flex-row justify-center gap-2">
                <div className="flex flex-col items-center">
                  <p className="text-[20px] leading-4">00</p>
                  <p className="text-sm uppercase leading-4">DAY</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[20px] leading-4">00</p>
                  <p className="text-sm uppercase leading-4">hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[20px] leading-4">00</p>
                  <p className="text-sm uppercase leading-4">Min</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[20px] leading-4">00</p>
                  <p className="text-sm uppercase leading-4">Sec</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HotDeals;
