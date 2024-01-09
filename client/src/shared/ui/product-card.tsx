import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import Action from "@shared/ui/action.tsx";
import Badge from "@shared/ui/badge.tsx";
import { IProduct } from "@shared/ui/product-card-sm.tsx";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

function ProductCard({ product }: Props) {
  const { _id, title, thumbnail, category, image, price, promoPrice } = product;

  const { t } = useContext(LanguageContext);

  return (
    <article className="group relative flex w-[256px] min-w-[190px] flex-col items-center">
      <figure className="relative w-full">
        <Link to={`/market/${category.toLowerCase()}/${_id}`}>
          <img
            className="absolute w-full opacity-0 transition-opacity duration-500
                       group-hover:opacity-100"
            src={thumbnail}
            alt=""
          />
        </Link>

        <Link to={`/market/${category}/${_id}`}>
          <img className="w-full" src={image} alt="" />
        </Link>

        <Badge className="absolute left-5 top-3 z-10">
          {t?.product.discount}
        </Badge>
        <Badge className="absolute right-5 top-3 z-10">{t?.product.new}</Badge>

        <Action
          className="invisible absolute left-[50px] top-[60%] translate-y-1/3
             opacity-0 transition duration-300 group-hover:visible
             group-hover:translate-y-0 group-hover:opacity-100"
          product={product}
        />

        <figcaption className="text-center">
          <p>{title}</p>
          <small>{category}</small>
          <div className="flex items-center justify-center gap-x-2">
            <p>
              <span className="font-semibold text-[--red-dark]">
                {promoPrice}
                <span className="text-sm">lei</span>
              </span>
            </p>
            <p className="line-through">
              {price}
              <span className="text-sm">lei</span>
            </p>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProductCard;
