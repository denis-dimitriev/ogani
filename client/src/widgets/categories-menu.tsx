import { Link } from "react-router-dom";
import { CATEGORIES } from "@shared/types/enums/categories.ts";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

const categories = Object.values(CATEGORIES);

function CategoriesMenu() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="h-full w-full rounded border border-[--light] shadow">
      <ul className="flex flex-col">
        {categories.map((category) => (
          <li
            key={category}
            className=" flex transition-all hover:bg-[--light]"
          >
            <Link
              to={`/market/${category.replaceAll(" ", "-")}`}
              className="w-full pl-[30px] pr-[20px] text-[14px]
              font-medium leading-9 text-[--gray] hover:text-[--gray-light]"
            >
              {t?.categories[category]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesMenu;
