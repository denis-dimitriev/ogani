import { ReactNode, useLayoutEffect, useState } from "react";
import { LoadingContext } from "@context/loading.context.ts";

type Props = {
  children: ReactNode;
};

export function LoadingProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
