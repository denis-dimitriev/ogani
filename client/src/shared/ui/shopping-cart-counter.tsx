import { Link } from "react-router-dom";
import { ShoppingCartIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";

const ShoppingCartCounter = observer(function () {
  const count = ShoppingCartStore.getCart().length;

  return (
    <Link to="/shopping-cart" className="relative block">
      <ShoppingCartIco className="fill-black stroke-black" />
      <ItemBadge className="absolute right-[-15px] top-[-10px]" count={count} />
    </Link>
  );
});

export default ShoppingCartCounter;
