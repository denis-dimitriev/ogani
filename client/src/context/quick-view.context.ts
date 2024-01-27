import { createContext, SetStateAction, Dispatch } from "react";
import { IProduct } from "@shared/types/product.types.ts";

interface Context {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  product: IProduct | null;
  setProduct: Dispatch<SetStateAction<IProduct | null>>;
}

export const QuickViewContext = createContext<Context>({
  view: false,
  setView: () => false,
  product: null,
  setProduct: () => null,
});
