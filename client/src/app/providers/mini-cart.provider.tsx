import { ReactNode, useLayoutEffect, useState } from "react";
import { MiniCartContext } from "@context/mini-cart.context.ts";

type Props = {
  children: ReactNode;
};

export function MiniCartProvider({ children }: Props) {
  const [miniCartOpen, setMiniCartOpen] = useState(false);

  useLayoutEffect(() => {
    if (miniCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [miniCartOpen]);

  return (
    <MiniCartContext.Provider value={{ miniCartOpen, setMiniCartOpen }}>
      {children}
    </MiniCartContext.Provider>
  );
}
