import { Navigate, Outlet } from "react-router-dom";
import { LINKS } from "@shared/types/enums/links.ts";
import UserStore from "@app/store/user.store.ts";
import { observer } from "mobx-react-lite";

const Protected = observer(function () {
  const user = UserStore.getUser();
  return user.role !== "guest" ? <Outlet /> : <Navigate to={LINKS.HOME} />;
});

export default Protected;
