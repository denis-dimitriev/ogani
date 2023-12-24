import {
  FavoritesIco,
  HintIco,
  SearchIco,
  ShoppingCartIco,
} from "@app/assets/icons";
import { HTMLProps, useContext, useState } from "react";
import UserStore from "@app/store/user.store.ts";
import { LanguageContext } from "@context/language.context.tsx";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { IProduct } from "@shared/ui/product-card-sm.tsx";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
}

function Action({ className, product }: Props) {
  const { t } = useContext(LanguageContext);
  const { setView, setProduct } = useContext(QuickViewContext);

  const [cartTip, setCartTip] = useState(false);
  const [favoriteTip, setFavoriteTip] = useState(false);
  const [viewTip, setViewTip] = useState(false);

  function onAddToCartHandler() {
    UserStore.addToCart(product._id);
  }

  function onAddToFavoritesHandler() {
    UserStore.addToFavorites(product._id);
  }

  function onQuickViewHandler() {
    setView(true);
    setProduct(product);
  }

  return (
    <div
      className={`${className}
         flex items-center justify-center gap-x-2 rounded-3xl
        border border-[--gray] bg-white px-3 py-1 shadow-2xl`}
    >
      <button
        className="relative rounded-full p-1 transition
                    duration-300 hover:bg-[--red] hover:fill-white hover:stroke-white"
        onClick={onAddToCartHandler}
        onMouseEnter={() => setCartTip(true)}
        onMouseLeave={() => setCartTip(false)}
      >
        <ShoppingCartIco className="scale-[0.6]" />

        <span
          className={`tips absolute left-[-200%] top-[-120%]
            ${cartTip ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <HintIco className="h-[20px] w-[20px]" />
          {t?.tips["add to cart"]}
        </span>
      </button>
      <button
        className="relative rounded-full p-1 transition duration-300
                   hover:bg-[--red] hover:fill-white hover:stroke-white"
        onClick={onAddToFavoritesHandler}
        onMouseEnter={() => setFavoriteTip(true)}
        onMouseLeave={() => setFavoriteTip(false)}
      >
        <FavoritesIco className="scale-[0.6]" />
        <span
          className={`tips absolute left-[-200%] top-[-120%]
            ${favoriteTip ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <HintIco className="h-[20px] w-[20px]" />
          {t?.tips["add to favorites"]}
        </span>
      </button>

      <button
        className="relative rounded-full p-1 transition duration-300
                   hover:bg-[--red] hover:fill-white hover:stroke-white"
        onClick={onQuickViewHandler}
        onMouseEnter={() => setViewTip(true)}
        onMouseLeave={() => setViewTip(false)}
      >
        <SearchIco className="scale-[0.6]" />
        <span
          className={`tips absolute left-[-200%] top-[-120%]
            ${viewTip ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <HintIco className="h-[20px] w-[20px]" />
          {t?.tips["quick view"]}
        </span>
      </button>
    </div>
  );
}

export default Action;
