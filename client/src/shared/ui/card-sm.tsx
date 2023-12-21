import ProductRating from "@shared/ui/product-rating.tsx";
import Action from "@shared/ui/action.tsx";

function CardSm() {
  return (
    <div className="group mt-3 flex flex-col rounded border border-[--light] shadow">
      <ul className="flex flex-col">
        <li>
          <div className="flex cursor-pointer items-center gap-x-2 text-[--darkest]">
            <figure className="w-[90px]">
              <img
                src="https://htmldemo.net/safira/safira/assets/img/product/product8.jpg"
                alt=""
              />
            </figure>
            <figcaption className="relative flex flex-col gap-1.5">
              <p className="text-[17px]">Varza din Moldova</p>
              <div className="flex">
                <ProductRating rating={4} />
              </div>
              <div className="ml-1 flex gap-x-2.5">
                <p>
                  <span className="font-semibold text-[--red-dark]">7.50</span>
                  lei
                </p>
                <p className="line-through">9.00lei</p>
                <Action
                  className="translate-y-1/3 opacity-0 group-hover:visible
                               group-hover:translate-y-0 group-hover:opacity-100"
                />
              </div>
            </figcaption>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CardSm;
