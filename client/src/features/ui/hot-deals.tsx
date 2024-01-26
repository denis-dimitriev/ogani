import { useContext } from "react";
import ProductCard from "@shared/ui/product-card.tsx";
import { IProduct } from "@shared/ui/product-card-sm.tsx";
import { LanguageContext } from "@context/language.context.ts";
import { useSlider } from "@shared/helpers/slider.hook.ts";
import SectionHeader from "@shared/ui/section-header.tsx";

interface Props {
  products: IProduct[];
}

function HotDeals({ products }: Props) {
  const { t } = useContext(LanguageContext);
  const { pos, next, prev } = useSlider(products.length - 1);

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title={t?.common["hot deals"] as string}
        prev={prev}
        next={next}
      />
      <div className="flex">
        <ul className="flex overflow-hidden">
          {products.map((p) => (
            <li
              key={p._id}
              className="min-w-[256px] flex-col transition duration-700"
              style={{
                transform: `translateX(${pos}%)`,
              }}
            >
              <ProductCard product={p} />

              <div className="mt-[30px] flex flex-row justify-center gap-2">
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
