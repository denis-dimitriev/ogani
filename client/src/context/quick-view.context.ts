import { createContext, SetStateAction, Dispatch } from "react";

interface Context {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  productID: string;
  setProductID: Dispatch<SetStateAction<string>>;
}

export const QuickViewContext = createContext<Context>({
  view: false,
  setView: () => false,
  productID: "",
  setProductID: () => {},
});
