import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLSpanElement>{
  count: number
}

function ItemBadge({ count, className }: Props) {
  return (
    <span
      className={`${className} h-[20px] w-[20px] rounded-full bg-[--red]
        text-center text-[14px] text-[--white]`}
    >
      {count}
    </span>
  );
}

export default ItemBadge;
