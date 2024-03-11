import { ArrowIco } from "@app/assets/icons";
import { Dispatch, MouseEvent, SetStateAction } from "react";

interface Props {
  countOfPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Paginate({ countOfPages, setPage, page }: Props) {
  function onNextPageHandler() {
    setPage((prev) => {
      if (prev === countOfPages) {
        return countOfPages;
      }

      return prev + 1;
    });
  }

  function onPageNumberClickHandler(e: MouseEvent<HTMLButtonElement>) {
    const page = +e.currentTarget.value;
    setPage(page);
  }
  function onPrevPageHandler() {
    setPage((prev) => {
      if (prev === 1) {
        return 1;
      }

      return prev - 1;
    });
  }

  return (
    <div className="mt-6 flex justify-center">
      <ul className="flex items-center gap-x-2 text-[14px]">
        <li className="flex items-center">
          <button
            className={`${
              page <= 1 ? "hidden" : "block"
            } group mr-[5px] rounded border border-[--gray] bg-[--light]
              px-1 py-0.5 transition hover:bg-[--lime]`}
            onClick={onPrevPageHandler}
          >
            <ArrowIco className="rotate-90 transition group-hover:scale-110 group-hover:fill-white" />
          </button>
        </li>

        {Array.from({ length: countOfPages }, (_, i) => i + 1).map(
          (value, i) => (
            <li key={value + i}>
              <button
                value={value}
                className={`${
                  page === value ? "bg-[--red]" : "bg-[--light]"
                } group h-[30px] w-[30px] rounded border
                   border-[--gray] transition hover:bg-[--red]`}
                onClick={onPageNumberClickHandler}
              >
                <span
                  className={`${
                    page === value ? "text-white" : ""
                  } transition group-hover:text-white`}
                >
                  {value}
                </span>
              </button>
            </li>
          ),
        )}

        <li className="flex items-center">
          <button
            className={`${
              page === countOfPages ? "hidden" : "block"
            } group ml-[5px] rounded border border-[--gray] bg-[--light]
              px-1 py-0.5 transition hover:bg-[--lime]`}
            onClick={onNextPageHandler}
          >
            <ArrowIco
              className="-rotate-90 transition group-hover:scale-110
                                 group-hover:fill-white"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
