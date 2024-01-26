import { HeaderScrollContext } from "@context/header-scroll.context.ts";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderScrollProvider = ({ children }: Props) => {
  const [hidden, setHidden] = useState(false);

  return (
    <HeaderScrollContext.Provider value={{ hidden, setHidden }}>
      {children}
    </HeaderScrollContext.Provider>
  );
};
