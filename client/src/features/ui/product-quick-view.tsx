import { ChangeEvent, useContext, useState } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { ArrowIco, CloseIco } from "@app/assets/icons";
import { isEmpty } from "@shared/helpers/common.helper.ts";

function ProductQuickView() {
  const { product, setView } = useContext(QuickViewContext);

  const [qty, setQTY] = useState(0.5);

  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!isEmpty(e.target.value)) {
      const qty = parseInt(e.target.value);
      setQTY(qty);
    } else {
      setQTY(0);
    }
  }

  const onViewExitHandler = () => setView(false);

  return (
    <div className="quick-view flex items-center justify-center">
      <div className="relative h-auto w-[900px] rounded-sm bg-white p-[30px] shadow-2xl">
        <button
          className="group absolute right-3 top-2 rounded-full border
         border-[--gray-lighter] p-0.5 transition hover:border-[--gray]"
          onClick={onViewExitHandler}
        >
          <CloseIco className="scale-75" />
        </button>
        <div className="relative flex gap-x-5">
          <figure className="flex w-1/2 flex-col">
            <img src={product?.image || product?.thumbnail} alt="" />
          </figure>
          <div className="flex w-1/2 flex-col">
            <h4 className="mb-5">{product?.title}</h4>
            <div className="mb-5 flex gap-x-2">
              <p className=" text-[17px]">{product?.promoPrice}lei</p>
              <p className="text-[17px] line-through">{product?.price}lei</p>
            </div>
            <p className="mb-5">{product?.description}</p>

            <div className="flex gap-x-3">
              <div className="flex gap-x-2">
                <button className="rotate-90 scale-150">
                  <ArrowIco />
                </button>
                <input
                  type="number"
                  className="w-[70px] border border-[--gray] pl-4 shadow"
                  value={`${qty}`}
                  onInput={onInputHandler}
                />
                <button className="-rotate-90 scale-150">
                  <ArrowIco />
                </button>
              </div>
              <button className="rounded-md bg-[--dark] px-4 py-2 text-white shadow">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
