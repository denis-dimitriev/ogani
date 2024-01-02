import ProductRating from "@shared/ui/product-rating.tsx";
import Action from "@shared/ui/action.tsx";
import { Rating } from "@shared/types/enums/product.types.ts";

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
  const { title, image, thumbnail, price, promoPrice, rating } = product;

  const trimTitle = title.substring(0, 13).concat("...");

  return (
    <div className="group mt-3 flex flex-col rounded border border-[--light] shadow">
      <ul className="flex flex-col">
        <li>
          <div className="group relative flex cursor-pointer items-center gap-x-2 text-[--darkest]">
            <figure className="relative w-[90px]">
              <img
                className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                src={image}
                alt=""
              />
              <img src={thumbnail} alt="" />
            </figure>
            <figcaption className="relative flex flex-col gap-1.5">
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
            </figcaption>

            <Action
              className="absolute bottom-2 right-0 z-50 translate-y-1/3 opacity-0 transition
                             duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              product={product}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductCardSm;
