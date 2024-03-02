import { CloseIco, LoginIco, ShoppingCartIco } from "@app/assets/icons";
import ShopCartCard from "@shared/ui/shop-cart-card.tsx";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { MiniCartContext } from "@context/mini-cart.context.ts";
import { observer } from "mobx-react-lite";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { LanguageContext } from "@context/language.context.ts";
import emptyCart from "@app/assets/img/shopping_cart_empty.png";

const MiniCart = observer(function () {
  const { setMiniCartOpen, miniCartOpen } = useContext(MiniCartContext);
  const { t } = useContext(LanguageContext);
  const products = ShoppingCartStore.getCart();
  const totalSum = ShoppingCartStore.totalSum;

  const onCloseMiniCartHandler = () => setMiniCartOpen(false);

  return (
    <div
      className="backdrop-dark"
      style={{
        display: miniCartOpen ? "block" : "none",
      }}
      // onClick={onCloseMiniCartHandler}
    >
      <div
        className="appearance absolute bottom-0 right-0 top-0 flex min-w-[320px] max-w-[350px]
                   animate-fadeInX flex-col gap-y-[24px] overflow-y-auto bg-white p-[30px]"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{t?.cart["shopping cart"]}</h4>
          <button className="group" onClick={onCloseMiniCartHandler}>
            <CloseIco
              className="scale-90 transition-transform duration-200
              group-hover:rotate-180"
            />
          </button>
        </div>

        {products.length === 0 ? (
          <div className="mt-[50px] flex flex-col items-center justify-center gap-[50px]">
            <img className="w-[150px] object-contain" src={emptyCart} alt="" />
            <h4>{t?.cart["is empty"]}</h4>
          </div>
        ) : (
          <Fragment>
            <ul className="mt-[50px] flex flex-col gap-2">
              {products.map((p) => (
                <li key={p._id}>
                  <ShopCartCard product={p} />
                </li>
              ))}
            </ul>
            <div className="flex justify-between">
              <span className="font-thin">{t?.cart["Items in cart"]}</span>
              <span>{products.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-thin uppercase">
                {t?.cart["sub total"]}
              </span>
              <span>
                <strong>{totalSum.toFixed(2)}</strong>
                <span className="text-[13px]">mdl</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to=""
                className="group inline-flex items-center justify-center rounded
                           bg-[--gray-lighter] p-2 text-[14px] uppercase transition
                           duration-300 hover:bg-[--red] hover:text-white"
              >
                <ShoppingCartIco
                  className="scale-90 pr-1 transition duration-300
              group-hover:fill-white"
                />
                {t?.cart["view cart"]}
              </Link>

              <Link
                to="/"
                className="group inline-flex items-center justify-center rounded
            bg-[--gray-lighter] p-2 text-[14px] uppercase transition
            duration-300 hover:bg-[--red] hover:text-white"
              >
                <LoginIco
                  className="scale-75 stroke-[--darkest] stroke-[3px] pr-1
              transition duration-300 group-hover:stroke-white"
                />
                {t?.cart.checkout}
              </Link>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
});

export default MiniCart;
