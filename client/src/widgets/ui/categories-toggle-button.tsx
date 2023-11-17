import { ArrowIco, CategoriesIco } from "@app/assets/icons";

function CategoriesToggleButton() {
  return (
    <div className="h-[50px] w-full rounded-t-md bg-[--red]">
      <button className="flex h-full w-full items-center gap-x-3 px-4 font-[500] text-[--white]">
        <CategoriesIco className="h-[20px] w-[20px] fill-[--white]" />
        All Categories
        <ArrowIco className="ml-auto h-[20px] w-[20px] fill-[--white]" />
      </button>
    </div>
  );
}

export default CategoriesToggleButton;
