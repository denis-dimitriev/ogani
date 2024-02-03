import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import Action from "@shared/ui/action.tsx";
import Badge from "@shared/ui/badge.tsx";
import { Link } from "react-router-dom";
import { ProductType } from "@shared/types/product.types.ts";

interface Props {
  product: ProductType;
}

function ProductCard({ product }: Props) {
  const { _id, name, category, thumbnail, sketch, price, promo, info } =
    product;

  const { t, language } = useContext(LanguageContext);

  return (
    <article
      className="group relative flex max-w-[258px] flex-col items-center
             rounded-md border border-[--gray-lighter] shadow"
    >
      <figure className="relative flex w-full flex-col pb-3">
        <Link
          to={`/market/${category.name.toLowerCase()}/${_id}`}
          className="relative  bg-blue-100/20"
        >
          <img
            className="absolute h-[256px] w-[256px] object-contain opacity-0 transition-opacity
            duration-500 group-hover:opacity-100"
            src={sketch}
            alt=""
          />
          <img
            className="h-[256px] w-[256px] object-contain opacity-100 transition-opacity
                       duration-500 group-hover:opacity-0"
            src={thumbnail}
            alt=""
          />
        </Link>

        {promo?.has && (
          <Badge className="absolute left-5 top-3 z-10">
            {t?.product.discount}
          </Badge>
        )}

        <Badge className="absolute right-5 top-3 z-10">{t?.product.new}</Badge>

        <figcaption className="relative mt-3 flex flex-col items-center justify-center">
          <p>{language === "ro" ? name.ro : name.ru}</p>
          <small>{t?.categories[category.name.toLowerCase() as never]}</small>
          <small>
            {language === "ro" ? info.manufacturer.ro : info.manufacturer.ru}
          </small>
          <div className="flex items-center justify-center gap-x-2">
            <p
              className={`font-normal  ${
                promo?.has ? "text-[--red-dark]" : "text-black"
              }`}
            >
              <span className="">
                {price}
                <span className="ml-1 text-[12px] text-black">mdl</span>
              </span>
            </p>
            {promo?.has && (
              <p className="line-through ">
                {promo.oldPrice}
                <span className="text-[12px]">mdl</span>
              </p>
            )}
          </div>

          <Action
            className="invisible absolute top-[-50px]
             translate-y-1/3 opacity-0 transition duration-300
             group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            product={product}
          />
        </figcaption>
      </figure>
    </article>
  );
}

export default ProductCard;
