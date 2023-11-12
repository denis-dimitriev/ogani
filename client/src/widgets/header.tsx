import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import Logo from "@shared/ui/logo";
import { HiEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import LanguageSelector from "@shared/ui/language-selector.tsx";

function Header() {
  const { t } = useContext(LanguageContext);

  return (
    <header className="header">
      {/* top */}
      <div className="header-top">
        <div className="container grid grid-cols-2 items-center">
          <ul className="flex gap-x-[45px]">
            <li>
              <Link to="#" className="flex items-center gap-x-1">
                <HiEnvelope /> hello@colorlib.com
              </Link>
            </li>
            <li>{t?.header["free shipping for all order of 1000 lei"]}</li>
          </ul>

          <div className=" flex justify-end gap-[30px]">
            <LanguageSelector />
            <Link to="#" className="flex items-center gap-x-2">
              <FiLogIn />
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="header-menu">
        <div className="container flex items-center">
          <Logo />
        </div>
      </div>

      {/* bottom */}
      <div className="header-bottom">
        <div className="container py-2"></div>
      </div>
    </header>
  );
}

export default Header;
