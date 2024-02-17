import { Link } from "react-router-dom";
import { CATEGORIES } from "@shared/types/enums/categories.ts";
import { useContext, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { MinusIco, PlusIco } from "@app/assets/icons";

const categories = Object.values(CATEGORIES);

const listHeight = categories.length * 41;

function CategoriesMenu() {
  const { t } = useContext(LanguageContext);

  const [shortedMenu, setShortedMenu] = useState(true);

  return (
    <div
      className={`${
        shortedMenu ? "shadow" : "shadow-2xl"
      } absolute z-10 h-auto w-full rounded border border-[--light] bg-white`}
    >
      <ul
        className="flex flex-col overflow-hidden transition-all duration-300"
        style={{
          height: shortedMenu ? "410px" : `${listHeight}px`,
        }}
      >
        {categories.map((category) => (
          <li
            key={category}
            className="flex px-[20px] py-[10px] transition hover:bg-[--light]"
          >
            <Link
              to={`/market/${category.replaceAll(" ", "-")}`}
              className="w-full text-[14px]
              text-black hover:text-[--gray-light]"
            >
              {t?.categories[category]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="">
        <button
          className="flex w-full items-center justify-center px-[20px] py-[10px] transition hover:bg-[--light]"
          onClick={() => setShortedMenu(!shortedMenu)}
        >
          {shortedMenu ? (
            <PlusIco className="scale-50" />
          ) : (
            <MinusIco className="scale-50" />
          )}
          {t?.categories["show all"]}
        </button>
      </div>
    </div>
  );
}

export default CategoriesMenu;
