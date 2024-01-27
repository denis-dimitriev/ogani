import { createContext, Dispatch, SetStateAction } from "react";

interface Context {
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
}

export const HeaderScrollContext = createContext<Context>({
  hidden: false,
  setHidden: () => false,
});
