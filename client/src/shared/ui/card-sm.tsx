import ProductRating from "@shared/ui/product-rating.tsx";
import Action from "@shared/ui/action.tsx";
import { Rating } from "@shared/types/enums/product.types.ts";

interface Props {
  _id: string;
  title: string;
  thumbnail: string;
  price: number;
  rating: Rating;
  promoPrice: number;
  sale: number;
}

function CardSm({ _id, title, thumbnail, price, promoPrice, rating }: Props) {
  const trimedTitle = title.substring(0, 13).concat("...");

  return (
    <div className="group mt-3 flex flex-col rounded border border-[--light] shadow">
      <ul className="flex flex-col">
        <li>
          <div className="group flex cursor-pointer items-center gap-x-2 text-[--darkest]">
            <figure className="w-[90px]">
              <img src={thumbnail} alt="" />
            </figure>
            <figcaption className="relative flex flex-col gap-1.5">
              <p className="text-[16px]">{trimedTitle}</p>
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
                <Action
                  className="absolute bottom-[10px] translate-y-1/3 opacity-0 transition
                             duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                  _id={_id}
                />
              </div>
            </figcaption>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CardSm;
