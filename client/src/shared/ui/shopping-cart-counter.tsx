import { ShoppingCartIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";
import { MiniCartContext } from "@context/mini-cart.context.ts";
import { useContext } from "react";

const ShoppingCartCounter = observer(function () {
  const { setMiniCartOpen } = useContext(MiniCartContext);

  const count = ShoppingCartStore.getCart().length;

  const setCartOpen = () => setMiniCartOpen(true);

  return (
    <button className="relative mr-[15px] block" onClick={setCartOpen}>
      <ShoppingCartIco />
      <ItemBadge className="absolute right-[-15px] top-[-10px]" count={count} />
    </button>
  );
});

export default ShoppingCartCounter;
