import { Link } from "react-router-dom";
import { ShoppingCartIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";

function ShoppingCart() {
  return (
    <Link to="#" className="flex items-center gap-x-1">
      <ShoppingCartIco className="h-[26px] w-[26px]" />
      <ItemBadge />
    </Link>
  );
}

export default ShoppingCart;
