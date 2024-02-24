import { Link } from "react-router-dom";
import { CATEGORIES } from "@shared/types/enums/categories.ts";
import { useContext, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { MinusIco, PlusIco } from "@app/assets/icons";
import { CategoriesMenuContext } from "@context/categories-menu.context.ts";

function CategoriesMenu() {
  const { t } = useContext(LanguageContext);
  const { open } = useContext(CategoriesMenuContext);

  const [shortedMenu, setShortedMenu] = useState(true);

  const categories = Object.values(CATEGORIES);
  const listHeight = categories.length * 41;

  return (
    <div
      className={`${
        shortedMenu ? "border-[--light] shadow" : "border-[--gray] shadow-2xl"
      } absolute top-0 z-10 w-[256px] flex-col rounded-b-lg border
        bg-white transition-all duration-300`}
      style={{
        display: open ? "flex" : "none",
        height: shortedMenu ? "450px" : `${listHeight}px`,
      }}
    >
      <nav className="w-full overflow-hidden">
        <ul className="flex flex-col">
          {categories.map((category) => (
            <li
              key={category}
              className="flex px-[20px] py-[10px] transition hover:bg-[--light]"
            >
              <Link
                to={`/categories/${category.replaceAll(" ", "-")}`}
                className="w-full text-[14px] text-black hover:text-[--gray-light]"
              >
                {t?.categories[category]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="flex w-full items-center justify-center px-[20px] py-2 transition hover:bg-[--light]"
        onClick={() => setShortedMenu(!shortedMenu)}
      >
        {shortedMenu ? (
          <>
            <PlusIco className="scale-50" />
            {t?.categories["more"]}
          </>
        ) : (
          <>
            <MinusIco className="scale-50" />
            {t?.categories["fewer"]}
          </>
        )}
      </button>
    </div>
  );
}

export default CategoriesMenu;
