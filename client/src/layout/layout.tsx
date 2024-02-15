import { ReactNode, useContext, useEffect } from "react";
import { HeaderScrollContext } from "@context/header-scroll.context.ts";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { setHidden } = useContext(HeaderScrollContext);

  function handleScroll() {
    if (window.scrollY >= 200) {
      setHidden(true);
    } else if (window.scrollY < 200) {
      setHidden(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="layout" id="layout">
      {children}
    </div>
  );
}

export default Layout;
