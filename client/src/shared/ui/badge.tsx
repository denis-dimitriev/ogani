import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

function Badge({ children, className }: Props) {
  return (
    <span
      className={`${className} rounded-lg bg-[--red] px-2 text-[12px] text-white shadow-2xl`}
    >
      {children}
    </span>
  );
}

export default Badge;
