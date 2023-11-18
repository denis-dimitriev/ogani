import { ReactNode, useState } from "react";
import { AuthContext } from "@context/auth.context.ts";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [hasAccount, setHasAccount] = useState(true);

  function userWantRegister() {
    setHasAccount(false);
  }

  function userWantLogin() {
    setHasAccount(true);
  }

  return (
    <AuthContext.Provider
      value={{ hasAccount, userWantRegister, userWantLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
