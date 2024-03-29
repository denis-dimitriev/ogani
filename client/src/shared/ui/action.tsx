import {
  DeleteIco,
  FavoritesIco,
  HintIco,
  ShoppingCartIco,
  VisualIco,
} from "@app/assets/icons";
import { Fragment, HTMLProps, useContext, useState } from "react";
import UserStore from "@app/store/user.store.ts";
import { LanguageContext } from "@context/language.context.ts";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { observer } from "mobx-react-lite";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { ProductType } from "@shared/types/product.types.ts";

interface Props extends HTMLProps<HTMLDivElement> {
  product: ProductType;
}

const Action = observer(function ({ className, product }: Props) {
  const { t } = useContext(LanguageContext);

  const { setView, setProductID } = useContext(QuickViewContext);
  const [cartTip, setCartTip] = useState(false);
  const [favoriteTip, setFavoriteTip] = useState(false);
  const [viewTip, setViewTip] = useState(false);

  const [inputActive, setInputActive] = useState(false);

  const unitQty = product.unit === "kg" ? 0.5 : 1;

  const cartItem = ShoppingCartStore.getCart().find(
    (p) => p._id === product._id,
  );

  const onIncHandler = () => ShoppingCartStore.addToCartFromAction(product);

  function onDecHandler() {
    ShoppingCartStore.removeUnitFromCart(product);

    const cartItem = ShoppingCartStore.getCart().find(
      (p) => p._id === product._id,
    );

    if (cartItem === undefined) {
      setInputActive(false);
    }
  }

  function onCartClickHandler() {
    setInputActive(true);
    ShoppingCartStore.addToCartFromAction(product);
  }

  function onAddToFavoritesHandler() {
    UserStore.addToFavorites(product._id);
  }

  function onQuickViewHandler() {
    setView(true);
    setProductID(product._id);
  }

  return (
    <div
      className={`${className}
         flex items-center justify-center gap-x-2 rounded-3xl
        border border-[--gray] bg-white px-3 py-1 shadow-lg shadow-[--red]`}
    >
      {inputActive ? (
        <div className="inline-flex text-[24px] leading-none">
          <button className="h-[30px] w-[30px]" onClick={onDecHandler}>
            {cartItem && cartItem.qty <= unitQty ? (
              <DeleteIco className="fill-[--red] stroke-[--red]" />
            ) : (
              <span>-</span>
            )}
          </button>
          <input
            type="text"
            inputMode="decimal"
            readOnly
            value={`${cartItem?.qty}${t?.product[cartItem?.unit as never]}`}
            className="w-[65px] text-center text-[18px] font-thin"
          />
          <button className="h-[30px] w-[30px]" onClick={onIncHandler}>
            +
          </button>
        </div>
      ) : (
        <Fragment>
          <button
            className="relative rounded-full p-1 transition
                    duration-300 hover:bg-[--red] hover:fill-white hover:stroke-white"
            onClick={onCartClickHandler}
            onMouseEnter={() => setCartTip(true)}
            onMouseLeave={() => setCartTip(false)}
          >
            <ShoppingCartIco className="scale-[0.6]" />

            <span
              className={`tips fixed left-0 top-[-35px]
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
              className={`tips fixed left-0 top-[-35px]
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
            <VisualIco className="scale-[0.6]" />
            <span
              className={`tips fixed left-0 top-[-35px]
            ${viewTip ? "visible opacity-100" : "invisible opacity-0"}`}
            >
              <HintIco className="h-[20px] w-[20px]" />
              {t?.tips["quick view"]}
            </span>
          </button>
        </Fragment>
      )}
    </div>
  );
});

export default Action;
