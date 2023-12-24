import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import Action from "@shared/ui/action.tsx";
import Badge from "@shared/ui/badge.tsx";
import { IProduct } from "@shared/ui/product-card-sm.tsx";

interface Props {
  product: IProduct;
}

function ProductCard({ product }: Props) {
  const { title, thumbnail, category, image, price, promoPrice } = product;

  const { t } = useContext(LanguageContext);

  return (
    <article className="col-sm rounded border border-[--light] shadow">
      <Link to={"#"} className="group relative flex flex-col items-center">
        <figure className="relative">
          <img
            className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={thumbnail}
            alt=""
          />
          <img className="" src={image} alt="" />
          <Badge className="absolute left-5 top-3 z-10">
            {t?.product.discount}
          </Badge>
          <Badge className="absolute right-5 top-3 z-10">
            {t?.product.new}
          </Badge>

          <Action
            className="invisible absolute bottom-0 left-[50px] translate-y-1/3 opacity-0 transition
                       duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            product={product}
          />
        </figure>
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
      </Link>
    </article>
  );
}

export default ProductCard;
