import { ShoppingCartIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";
import { MiniCartContext } from "@context/mini-cart.context.ts";
import { useContext } from "react";
import { LINKS } from "@shared/types/enums/links.ts";
import { useLocation } from "react-router-dom";
import { LoadingContext } from "@context/loading.context.ts";
import Skeleton from "react-loading-skeleton";

const ShoppingCartCounter = observer(function () {
  const { setMiniCartOpen } = useContext(MiniCartContext);
  const { loading } = useContext(LoadingContext);
  const count = ShoppingCartStore.getCart().length;
  const location = useLocation();

  function setCartOpen() {
    if (location.pathname === LINKS.SHOPPING_CART) {
      setMiniCartOpen(false);
    } else {
      setMiniCartOpen(true);
    }
  }

  if (loading) {
    return <Skeleton className="h-[50px] min-w-[50px]" circle />;
  }

  return (
    <button className="relative mr-[15px] block" onClick={setCartOpen}>
      <ShoppingCartIco />
      <ItemBadge className="absolute right-[-15px] top-[-10px]" count={count} />
    </button>
  );
});

export default ShoppingCartCounter;
