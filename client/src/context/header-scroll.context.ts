import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
};

export const HeaderScrollContext = createContext<Context>({
  hidden: false,
  setHidden: () => false,
});
