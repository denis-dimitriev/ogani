import Logo from "@shared/ui/logo.tsx";
import SearchForm from "@widgets/search-form.tsx";
import LanguageSelector from "@shared/ui/language-selector.tsx";
import FavoritesCounter from "@shared/ui/favorites-counter.tsx";
import ShoppingCartCounter from "@shared/ui/shopping-cart-counter.tsx";
import { useContext } from "react";
import { HeaderScrollContext } from "@context/header-scroll.context.ts";

function HeaderFixed() {
  const { hidden } = useContext(HeaderScrollContext);

  return (
    <div
      className="bg-gradient fixed left-0 right-0 top-0 z-[89]
                border-b border-b-[--red] shadow-2xl transition-transform
                duration-500 ease-in-out"
      style={{
        transform: `${hidden ? "translateY(0)" : "translateY(-100%)"}`,
      }}
    >
      <div className="container flex items-center justify-between py-2">
        <div className="col-sm">
          <Logo />
        </div>
        <div className="col-lg">
          <SearchForm />
        </div>
        <LanguageSelector />
        <FavoritesCounter />
        <ShoppingCartCounter />
      </div>
    </div>
  );
}

export default HeaderFixed;
