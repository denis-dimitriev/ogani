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
      <ul className="flex items-center gap-x-1">
        <li>
          <button
            className="group rounded bg-[--red] px-5 py-2 transition
                               hover:bg-[--red-dark]"
            disabled={page <= 1}
            onClick={onPrevPageHandler}
          >
            <ArrowIco className="rotate-90 fill-white transition group-hover:scale-110" />
          </button>
        </li>

        {Array.from({ length: countOfPages }, (_, i) => i + 1).map(
          (value, i) => (
            <li key={value + i}>
              <button
                value={value}
                className={`${
                  page === value ? "bg-[--red]" : "bg-[--light]"
                } group w-[40px] rounded border border-[--gray]
                   p-2 transition hover:bg-[--red]`}
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

        <li>
          <button
            className="group rounded bg-[--red] px-5 py-2 transition
                               hover:bg-[--red-dark]"
            disabled={page === countOfPages}
            onClick={onNextPageHandler}
          >
            <ArrowIco className="-rotate-90 fill-white transition group-hover:scale-110" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
