import { DeleteIco } from "@app/assets/icons";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@context/language.context.ts";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";
import { MiniCartContext } from "@context/mini-cart.context.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { LINKS } from "@shared/types/enums/links.ts";
import emptyCart from "@app/assets/img/shopping_cart_empty.png";

const ShoppingCartPage = observer(function () {
  const { t, language } = useContext(LanguageContext);
  const { setMiniCartOpen } = useContext(MiniCartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const products = ShoppingCartStore.getCart();
  const totalSum = ShoppingCartStore.totalSum;

  useEffect(() => {
    if (location.pathname === LINKS.SHOPPING_CART) {
      setMiniCartOpen(false);
    }
  }, [location, setMiniCartOpen]);

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <h2>{t?.cart["shopping cart"]}</h2>
      </div>

      {products.length === 0 ? (
        <div className="mt-[50px] flex flex-col items-center justify-center gap-[50px]">
          <img className="w-[150px] object-contain" src={emptyCart} alt="" />
          <h4>{t?.cart["is empty"]}</h4>
        </div>
      ) : (
        <table className="mt-5 w-full">
          <thead>
            <tr className="border-b-2 border-[--dark]">
              <th className="border-r border-[--dark] p-2">{t?.cart.delete}</th>
              <th className="border-r border-[--dark] p-2">{t?.cart.image}</th>
              <th className="border-r border-[--dark] p-2">{t.cart.product}</th>
              <th className="border-r border-[--dark] p-2">{t?.cart.price}</th>
              <th className="border-r border-[--dark] p-2">
                {t?.cart.quantity}
              </th>
              <th className="p-2">{t?.cart["sub total"]}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="text-center">
                <td className="p-2">
                  <button
                    className="group rounded-full p-2 transition hover:bg-[--red]"
                    onClick={() => ShoppingCartStore.removeItemFromCart(p._id)}
                  >
                    <DeleteIco className="scale-90 transition group-hover:fill-white" />
                  </button>
                </td>
                <td className="w-[150px] p-2">
                  <img src={p.thumbnail} alt="" />
                </td>
                <td className="p-2">
                  {language === "ro" ? p.name.ro : p.name.ru}
                </td>
                <td>
                  {p.price}
                  <span className="text-sm">mdl</span>
                </td>
                <td className="p-2">{`${p.qty}${p.unit}`}</td>
                <td className="p-2">
                  {p.totalPrice.toFixed(2)}
                  <span className="text-sm">mdl</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default ShoppingCartPage;
