import { createContext, SetStateAction, Dispatch } from "react";
import { ProductType } from "@shared/types/product.types.ts";

interface Context {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  product: ProductType | null;
  setProduct: Dispatch<SetStateAction<ProductType | null>>;
}

export const QuickViewContext = createContext<Context>({
  view: false,
  setView: () => false,
  product: null,
  setProduct: () => null,
});
