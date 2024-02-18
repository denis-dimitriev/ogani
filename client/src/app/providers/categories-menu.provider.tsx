import { ReactNode, useState } from "react";
import { CategoriesMenuContext } from "@context/categories-menu.context.ts";

type Props = {
  children: ReactNode;
};

export const CategoriesMenuProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <CategoriesMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </CategoriesMenuContext.Provider>
  );
};
