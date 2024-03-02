import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import Logo from "@shared/ui/logo";
import { Link } from "react-router-dom";
import { CustomerSupportIco, LoginIco, MailIco } from "@app//assets/icons";
import LanguageSelector from "@shared/ui/language-selector.tsx";
import MainNav from "@widgets/main-nav.tsx";
import FavoritesCounter from "@shared/ui/favorites-counter.tsx";
import ShoppingCartCounter from "@shared/ui/shopping-cart-counter.tsx";
import CategoriesToggleButton from "@widgets/ui/categories-toggle-button.tsx";
import SearchForm from "@widgets/search-form.tsx";
import UserAccount from "@widgets/user-account.tsx";
import { LINKS } from "@shared/types/enums/links.ts";
import UserStore from "@app/store/user.store.ts";
import { observer } from "mobx-react-lite";
import HeaderFixed from "@widgets/header-fixed.tsx";

const Header = observer(function () {
  const { t } = useContext(LanguageContext);
  const user = UserStore.getUser();

  return (
    <header className="header">
      {/* top */}
      <div className="header-top">
        <div className="container flex items-center gap-[--col-gap]">
          <div className="col-sm">
            <Link to="#" className="flex items-center gap-x-1">
              <MailIco className="h-[14px] w-[14px]" /> hello@colorlib.com
            </Link>
          </div>

          <div className="col-lg">
            <p className="bp992:hidden">
              {t?.header["free shipping for all order of 1000 lei"]}
            </p>
          </div>

          <div className="col-sm flex justify-end gap-[30px]">
            <LanguageSelector />
            <Link
              to={LINKS.AUTH}
              className={`${
                user.role !== "guest" && "hidden"
              } flex items-center gap-x-2`}
            >
              <LoginIco className="h-[18px] w-[18px] stroke-[--darkest]" />
              <span>{t?.common.enter}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="header-menu">
        <div className="container flex items-center gap-[--col-gap] bp834:justify-between">
          <div className="col-sm">
            <Logo />
          </div>
          <div className="col-lg">
            <MainNav />
          </div>
          <div className="col-sm flex items-center justify-end gap-x-[30px]">
            <FavoritesCounter />
            <ShoppingCartCounter />
            <UserAccount />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="header-bottom">
        <div className="container flex items-center gap-[--col-gap]">
          <div className="col-sm">
            <CategoriesToggleButton />
          </div>
          <div className="col-lg">
            <SearchForm />
          </div>
          <div className="col-sm flex justify-end bp834:hidden">
            <div className="flex items-center gap-x-3">
              <CustomerSupportIco className="h-[35px] w-[35px]" />
              <span className="flex flex-col items-start justify-start">
                <p>(022) 231-231</p>
                <p className="text-xs">Customer support</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <HeaderFixed />
    </header>
  );
});

export default Header;
