import ProductRating from "@shared/ui/product-rating.tsx";
import Action from "@shared/ui/action.tsx";
import { Rating } from "@shared/types/enums/product.types.ts";
import { Link } from "react-router-dom";

export interface IProduct {
  _id: string;
  title: string;
  thumbnail: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: Rating;
  promoPrice: number;
  sale: number;
}

interface Props {
  product: IProduct;
}

function ProductCardSm({ product }: Props) {
  const { _id, title, image, thumbnail, category, price, promoPrice, rating } =
    product;

  const trimTitle =
    title.length > 20 ? title.substring(0, 15).concat("...") : title;

  return (
    <article className="h-full rounded border border-[--light] shadow">
      <figure className="group relative flex h-full items-start justify-center gap-x-2 text-[--darkest]">
        <div className="relative min-w-[90px]">
          <Link to={`/market/${category.toLowerCase()}/${_id}`}>
            <img
              className="absolute flex-1 opacity-0 transition-opacity
                        duration-500 group-hover:opacity-100"
              src={image}
              alt=""
            />
          </Link>
          <Link to={`/market/${category}/${_id}`}>
            <img className="flex-1" src={thumbnail} alt="" />
          </Link>
        </div>
        <figcaption className="relative flex h-full min-w-[166px] flex-col gap-1.5">
          <p className="text-[16px]">{trimTitle}</p>
          <div className="flex">
            <ProductRating rating={rating} />
          </div>
          <div className="ml-1 flex gap-x-2.5">
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

          <Action
            className="absolute top-1/2 z-50 translate-y-1/3 opacity-0 transition
                    duration-300 group-hover:visible group-hover:translate-y-0
                    group-hover:opacity-100"
            product={product}
          />
        </figcaption>
      </figure>
    </article>
  );
}

export default ProductCardSm;
