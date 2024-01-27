import { Link } from "react-router-dom";
import { FavoritesIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";
import { observer } from "mobx-react-lite";

const FavoritesCounter = observer(function () {
  return (
    <Link to="/favorites" className="relative block">
      <FavoritesIco />
      <ItemBadge className="absolute right-[-15px] top-[-10px]" count={1} />
    </Link>
  );
});

export default FavoritesCounter;
