import { UserIco } from "@app/assets/icons";
import { Link } from "react-router-dom";
import { LINKS } from "@shared/types/enums/links.ts";

function UserAccount() {
  return (
    <div className="group relative flex cursor-pointer items-center">
      <button>
        <UserIco className="h-[26px] w-[26px]" />
      </button>

      <div
        className="invisible absolute right-0 top-[30px] w-[100px] translate-y-[30px] rounded bg-[--darkest] tracking-widest
           text-[--white] opacity-0 shadow-lg transition duration-300
           group-focus-within:visible group-focus-within:translate-y-0
           group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0
           group-hover:opacity-100"
      >
        <ul>
          <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
            <Link to={LINKS.USER}>Profile</Link>
          </li>
          <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
            <Link to="#">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserAccount;
