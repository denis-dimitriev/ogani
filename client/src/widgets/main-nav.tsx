import { Link } from "react-router-dom";
import { ArrowIco } from "@app/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

function MainNav() {
  const { t } = useContext(LanguageContext);

  return (
    <nav className="text-[14px] font-[700] uppercase tracking-wide text-[--gray]">
      <ul className="flex items-center gap-8">
        <li className="transition hover:text-[--gray-light]">
          <Link to="#">{t?.menu.main}</Link>
        </li>
        <li className="transition hover:text-[--teal]">
          <Link to="#">{t?.menu.shop}</Link>
        </li>

        <li
          className="group relative flex cursor-pointer items-center
           transition hover:text-[--gray-light]"
        >
          <Link to="#">{t?.menu.pages}</Link>
          <ArrowIco className="w-[16px]" />

          <div
            className="sub-pages invisible translate-y-[30px] rounded tracking-widest
           text-[--white] opacity-0 shadow-lg transition duration-300
           group-focus-within:visible group-focus-within:translate-y-0
           group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0
           group-hover:opacity-100"
          >
            <ul className="flex flex-col ">
              <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
                <Link to="">About</Link>
              </li>
              <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
                <Link to="">About me</Link>
              </li>
              <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
                <Link to="">About us</Link>
              </li>
              <li className="cursor-pointer p-2 transition  hover:text-[--teal]">
                <Link to="">Somewhere deep</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="transition hover:text-[--gray-light]">
          <Link to="#">{t?.menu.blog}</Link>
        </li>
        <li className="transition hover:text-[--gray-light]">
          <Link to="#">{t?.menu.contacts}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
