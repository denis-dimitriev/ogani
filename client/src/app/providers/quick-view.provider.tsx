import { ReactNode, useLayoutEffect, useState } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";

interface Props {
  children: ReactNode;
}

export function QuickViewProvider({ children }: Props) {
  const [view, setView] = useState(false);
  const [productID, setProductID] = useState<string>("");

  useLayoutEffect(() => {
    if (view) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [view]);

  return (
    <QuickViewContext.Provider
      value={{ view, setView, productID, setProductID }}
    >
      {children}
    </QuickViewContext.Provider>
  );
}
