import { UserIco } from "@app/assets/icons";
import { Link } from "react-router-dom";
import { LINKS } from "@shared/types/enums/links.ts";
import { observer } from "mobx-react-lite";
import UserStore from "@app/store/user.store.ts";
import ApiService from "@app/service/api.service.ts";

const UserAccount = observer(function () {
  const user = UserStore.getUser();

  async function onSubmitHandler() {
    await ApiService.logoutUser()
      .then((res) => {
        if (res.status === 200) {
          UserStore.setDefaultUserLS();
        }
      })
      .catch((e) => console.error(e));
  }

  return (
    <div
      className={`${
        user.role === "guest" && "hidden"
      } group relative flex cursor-pointer items-center p-1`}
    >
      <button type="button">
        <UserIco className="h-[26px] w-[26px]" />
      </button>

      <form
        className="invisible absolute right-0 top-[35px] w-[100px] translate-y-[30px] rounded bg-[--darkest] tracking-widest
           text-[--white] opacity-0 shadow-lg transition duration-300
           group-focus-within:visible group-focus-within:translate-y-0
           group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0
           group-hover:opacity-100"
        onSubmit={onSubmitHandler}
      >
        <ul>
          <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
            <Link to={LINKS.USER}>Profile</Link>
          </li>
          <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
            <button type="submit">Logout</button>
          </li>
        </ul>
      </form>
    </div>
  );
});

export default UserAccount;
