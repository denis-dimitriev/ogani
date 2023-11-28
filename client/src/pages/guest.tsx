import { Navigate, Outlet } from "react-router-dom";
import UserStore from "@app/store/user.store.ts";
import { LINKS } from "@shared/types/enums/links.ts";

function Guest() {
  const user = UserStore.getUser();

  if (user.role !== "guest") {
    return <Navigate to={LINKS.HOME} />;
  }

  return <Outlet />;
}

export default Guest;
