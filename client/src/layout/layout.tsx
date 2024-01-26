import { ReactNode, useCallback, useContext, useEffect } from "react";
import { HeaderScrollContext } from "@context/header-scroll.context.ts";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { hidden, setHidden } = useContext(HeaderScrollContext);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const windowsHeight = window.innerHeight;
      const layoutHeight = document.getElementById("layout")?.offsetHeight;
      console.log(event.deltaMode);
      if (layoutHeight! > windowsHeight) {
        event.deltaY > 0 ? setHidden(true) : setHidden(false);
      }
    },
    [hidden],
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const layout = document.getElementById("layout");
    const windowsHeight = window.innerHeight;
    layout?.addEventListener(
      "wheel",
      (e: WheelEvent) => {
        if (layout.offsetHeight > windowsHeight) {
          timeout = setTimeout(() => handleScroll(e), 100);
        }
      },
      { passive: true },
    );
    return () => {
      layout?.removeEventListener("wheel", handleScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll]);

  return (
    <div className="layout" id="layout">
      {children}
    </div>
  );
}

export default Layout;
