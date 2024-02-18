import { createContext, Dispatch, SetStateAction } from "react";

interface Context {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CategoriesMenuContext = createContext<Context>({
  open: false,
  setOpen: () => false,
});
