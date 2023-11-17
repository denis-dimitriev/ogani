import { Link } from "react-router-dom";
import { FavoritesIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";

function Favorites() {
  return (
    <Link to="#" className="flex items-center gap-x-1">
      <FavoritesIco className="h-[26px] w-[26px]" />
      <ItemBadge />
    </Link>
  );
}

export default Favorites;
