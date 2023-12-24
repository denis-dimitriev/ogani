import { createContext, SetStateAction, Dispatch } from "react";
import { IProduct } from "@shared/ui/product-card-sm.tsx";

interface IContext {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  product: IProduct | null;
  setProduct: Dispatch<SetStateAction<IProduct | null>>;
}

export const QuickViewContext = createContext<IContext>({
  view: false,
  setView: () => false,
  product: null,
  setProduct: () => null,
});
