import { createContext } from "react";

interface IContext {
  hasAccount: boolean;
  userWantRegister: () => void;
  userWantLogin: () => void;
}

const initial: IContext = {
  hasAccount: false,
  userWantLogin: () => {},
  userWantRegister: () => {},
};

export const AuthContext = createContext<IContext>(initial);
