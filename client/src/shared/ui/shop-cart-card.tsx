import ShoppingCartStore, {
  ShoppingCartItem,
} from "@app/store/shopping-cart.store.ts";
import { CloseIco } from "@app/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";

type Props = {
  product: ShoppingCartItem;
};

// TODO when will be promo price, to add functionality

function ShopCartCard({
  product: { name, thumbnail, qty, unit, price, _id },
}: Props) {
  const { language, t } = useContext(LanguageContext);

  const onDeleteItemHandler = () => ShoppingCartStore.removeItemFromCart(_id);

  return (
    <div className="flex items-start justify-between gap-x-3">
      <figure className="h-[90px] w-[90px]">
        <img src={thumbnail} alt="" />
      </figure>
      <figcaption className="flex flex-col text-[14px]">
        {language === "ro" ? <p>{name.ro}</p> : <p>{name.ru}</p>}
        <p>
          <span className="">{`${qty}${t?.product[`${unit}`]}`}</span>&nbsp;
          <span className="">x</span>&nbsp;
          <span className="font-bold">{price}</span>
          <span className="text-[13px]">mdl</span>
        </p>
      </figcaption>
      <button onClick={onDeleteItemHandler}>
        <CloseIco className="scale-50" />
      </button>
    </div>
  );
}

export default ShopCartCard;
