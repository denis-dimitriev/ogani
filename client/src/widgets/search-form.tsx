import { SearchIco } from "@app/assets/icons";
import { FormEvent } from "react";

function SearchForm() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="search"
        placeholder="Search..."
        className="h-full w-full bg-[--light] px-4"
      />
      <button
        type="submit"
        className="h-full bg-[--red] px-5 transition hover:bg-[--red-dark]"
      >
        <SearchIco className="w-[20px] fill-white stroke-white" />
      </button>
    </form>
  );
}

export default SearchForm;
