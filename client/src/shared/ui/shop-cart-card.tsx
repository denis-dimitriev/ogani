import { ShoppingCartItem } from "@app/store/shopping-cart.store.ts";
import { CloseIco } from "@app/assets/icons";

type Props = {
  product?: ShoppingCartItem;
};

function ShopCartCard({ product }: Props) {
  return (
    <div className="flex items-start justify-between gap-x-3">
      <figure className="h-[90px] w-[90px]">
        <img
          src="https://htmldemo.net/safira/safira/assets/img/s-product/product.jpg"
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col text-[14px]">
        <p>Varza din Moldova Varza din Moldova</p>
        <p>
          <span className="">{1}</span>&nbsp;
          <span className="">x</span>&nbsp;
          <span className="font-bold">{12.9}</span>
          <span className="text-[13px]">mdl</span>
        </p>
      </figcaption>
      <button>
        <CloseIco className="scale-50" />
      </button>
    </div>
  );
}

export default ShopCartCard;
