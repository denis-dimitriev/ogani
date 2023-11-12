import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;