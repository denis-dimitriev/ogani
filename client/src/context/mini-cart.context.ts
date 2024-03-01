import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  miniCartOpen: boolean;
  setMiniCartOpen: Dispatch<SetStateAction<boolean>>;
};

export const MiniCartContext = createContext<Context>({
  miniCartOpen: false,
  setMiniCartOpen: () => false,
});
