import { createContext } from "react";

interface IAuthContext {
  hasAccount: boolean;
  userWantRegister: () => void;
  userWantLogin: () => void;
}

const initial: IAuthContext = {
  hasAccount: false,
  userWantLogin: () => {},
  userWantRegister: () => {},
};

export const AuthContext = createContext<IAuthContext>(initial);
