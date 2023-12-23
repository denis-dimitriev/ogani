import { FavoritesIco, ShoppingCartIco } from "@app/assets/icons";
import { HTMLProps } from "react";
import UserStore from "@app/store/user.store.ts";

interface Props extends HTMLProps<HTMLDivElement> {
  _id: string;
}

function Action({ className, _id }: Props) {
  function onAddToCartHandler() {
    UserStore.addToCart(_id);
  }

  function onAddToFavoritesHandler() {
    UserStore.addToFavorites(_id);
  }

  return (
    <div
      className={`${className} invisible  flex w-[120px]
         items-center justify-center gap-x-2 rounded-3xl border
        border-[--gray] bg-white p-1 shadow-2xl`}
    >
      <button
        className="rounded-full p-1 transition duration-300
                    hover:bg-[--red] hover:fill-white hover:stroke-white"
        onClick={onAddToCartHandler}
      >
        <ShoppingCartIco className="scale-75" />
      </button>
      <button
        className="rounded-full p-1 transition duration-300
                   hover:bg-[--red] hover:fill-white hover:stroke-white"
        onClick={onAddToFavoritesHandler}
      >
        <FavoritesIco className="scale-75" />
      </button>
    </div>
  );
}

export default Action;
