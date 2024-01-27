import { createContext } from "react";

interface Context {
  hasAccount: boolean;
  userWantRegister: () => void;
  userWantLogin: () => void;
}

const initial: Context = {
  hasAccount: false,
  userWantLogin: () => {},
  userWantRegister: () => {},
};

export const AuthContext = createContext<Context>(initial);
