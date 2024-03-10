import { Link } from "react-router-dom";
import { FavoritesIco } from "@app/assets/icons";
import ItemBadge from "@shared/ui/item-badge.tsx";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { LoadingContext } from "@context/loading.context.ts";
import Skeleton from "react-loading-skeleton";

const FavoritesCounter = observer(function () {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return <Skeleton className="h-[50px] min-w-[50px]" circle />;
  }

  return (
    <Link to="/favorites" className="relative block">
      <FavoritesIco />
      <ItemBadge className="absolute right-[-15px] top-[-10px]" count={1} />
    </Link>
  );
});

export default FavoritesCounter;
