import { CloseIco, LoginIco, ShoppingCartIco } from "@app/assets/icons";
import ShopCartCard from "@shared/ui/shop-cart-card.tsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MiniCartContext } from "@context/mini-cart.context.ts";

function MiniCart() {
  const { setMiniCartOpen, miniCartOpen } = useContext(MiniCartContext);

  const onCloseMiniCartHandler = () => setMiniCartOpen(false);

  return (
    <div
      className="backdrop-dark"
      style={{
        display: miniCartOpen ? "block" : "none",
      }}
    >
      <div
        className="appearance absolute bottom-0 right-0 top-0 flex
                   max-w-[350px] animate-fadeInX flex-col gap-y-[30px] overflow-y-auto bg-white
                   p-[30px]"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Cart</h4>
          <button className="group" onClick={onCloseMiniCartHandler}>
            <CloseIco
              className="scale-90 transition-transform duration-200
              group-hover:rotate-180"
            />
          </button>
        </div>

        <ul className="flex flex-col">
          <li>
            <ShopCartCard />
            <ShopCartCard />
            <ShopCartCard />
            <ShopCartCard />
          </li>
        </ul>

        <div className="flex justify-between text-[19px]">
          <span className="font-thin">Items in cart</span>
          <span>4</span>
        </div>
        <div className="flex justify-between">
          <span className="font-thin uppercase">Total</span>
          <span>
            <strong>4.25</strong>
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
            View cart
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
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MiniCart;
