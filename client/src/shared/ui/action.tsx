import { FavoritesIco, ShoppingCartIco } from "@app/assets/icons";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

function Action({ className }: Props) {
  return (
    <div
      className={`${className} invisible absolute bottom-[10px] m-auto flex w-[120px]
         items-center justify-center gap-x-2 rounded-3xl border
        border-[--gray] bg-white p-1 shadow-2xl
        transition duration-700`}
    >
      <button
        className="rounded-full p-1 transition duration-300
                    hover:bg-[--red] hover:fill-white hover:stroke-white"
      >
        <ShoppingCartIco className="scale-75" />
      </button>
      <button
        className="rounded-full p-1 transition duration-300
                   hover:bg-[--red] hover:fill-white hover:stroke-white"
      >
        <FavoritesIco className="scale-75" />
      </button>
    </div>
  );
}

export default Action;
