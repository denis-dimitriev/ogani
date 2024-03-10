import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<Context>({
  loading: false,
  setLoading: () => false,
});
