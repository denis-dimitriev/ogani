import { Link } from "react-router-dom";

const categories = [
  { id: "1", name: "Vegetables" },
  { id: "2", name: "Fruits" },
  { id: "3", name: "Salads" },
  { id: "4", name: "Fish & Seafood" },
  { id: "5", name: "Fresh Meat" },
  { id: "6", name: "Butter & Eggs" },
  { id: "7", name: "Milk" },
  { id: "8", name: "Oil & Vinegars" },
  { id: "9", name: "Oil &  Jam & Honey" },
  { id: "10", name: "Frozen Food" },
  { id: "11", name: "Frozen Food" },
];

function CategoriesMenu() {
  return (
    <div className="h-full w-full rounded border border-[--light] shadow">
      <ul className="flexflex-col">
        {categories.map((c) => (
          <li
            key={c.id}
            className="mb-1 flex transition-all hover:bg-[--light]"
          >
            <Link
              to={c.name.toLowerCase()}
              className="w-full pl-[30px] pr-[20px] text-[14px]
              font-medium leading-9 text-[--gray] hover:text-[--gray-light]"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesMenu;
