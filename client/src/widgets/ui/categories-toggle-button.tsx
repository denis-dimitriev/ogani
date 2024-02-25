import { ArrowIco, CategoriesIco } from "@app/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { CategoriesMenuContext } from "@context/categories-menu.context.ts";
import { useLocation } from "react-router-dom";
import { LINKS } from "@shared/types/enums/links.ts";

function CategoriesToggleButton() {
  const { t } = useContext(LanguageContext);
  const { setOpen, open } = useContext(CategoriesMenuContext);
  const location = useLocation();

  function onMenuToggleHandler() {
    if (location.pathname === LINKS.HOME && window.innerHeight >= 768) {
      return setOpen(true);
    }
    setOpen(!open);
  }

  return (
    <div className="h-[50px] w-[256px] rounded-t-md bg-[--red] bp1024:w-[206px]">
      <button
        className="flex h-full w-full items-center gap-x-3 px-4 font-[500] text-[--white]"
        onClick={onMenuToggleHandler}
      >
        <CategoriesIco className="h-[20px] w-[20px] fill-[--white]" />
        {t?.categories.categories}
        <ArrowIco
          className={`${
            open ? "rotate-180" : "rotate-0"
          } ml-auto h-[20px] w-[20px] fill-[--white] transition-transform duration-300`}
        />
      </button>
    </div>
  );
}

export default CategoriesToggleButton;
