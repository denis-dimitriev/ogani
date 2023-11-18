import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

function Backdrop({ children, className }: Props) {
  return <div className={`backdrop ${className}`}>{children}</div>;
}

export default Backdrop;
