import { ChangeEvent, useContext, useState } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { ArrowIco, CloseIco } from "@app/assets/icons";
import { isEmpty } from "@shared/helpers/common.helper.ts";
import { LanguageContext } from "@context/language.context.tsx";

function ProductQuickView() {
  const { product, setView } = useContext(QuickViewContext);
  const [qty, setQTY] = useState(0.5);
  const { t } = useContext(LanguageContext);

  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    if (isEmpty(e.target.value)) {
      setQTY(0);
    } else if (isNaN(+e.target.value)) {
      setQTY(0);
    } else if (+e.target.value >= 100) {
      setQTY(100);
    } else {
      setQTY(+e.target.value);
    }
  }

  const onIncHandler = () =>
    setQTY((prev) => {
      if (prev >= 100) {
        return 100;
      }
      return prev + 0.5;
    });

  const onDecHandler = () => setQTY((prev) => prev - 0.5);

  const onViewExitHandler = () => setView(false);

  return (
    <div className="quick-view flex items-center justify-center">
      <div
        className="relative h-[500px] w-[900px]
       rounded-sm bg-white p-[30px] shadow-2xl tablet:w-[90%]
       "
      >
        <button
          className="group absolute right-3 top-2 rounded-full border
         border-[--gray-lighter] p-0.5 transition hover:border-[--gray]"
          onClick={onViewExitHandler}
        >
          <CloseIco className="scale-75" />
        </button>
        <div className="relative flex gap-x-5">
          <figure className="flex w-1/2 flex-col">
            <img
              className="h-full w-full"
              src={product?.image || product?.thumbnail}
              alt=""
            />
          </figure>
          <div className="flex w-1/2 flex-col">
            <h4 className="mb-5">{product?.title}</h4>
            <div className="mb-5 flex gap-x-2">
              <p className=" text-[17px]">{product?.promoPrice}lei</p>
              <p className="text-[17px] line-through">{product?.price}lei</p>
            </div>
            <p className="mb-5">{product?.description}</p>

            <div className="flex gap-x-3">
              <div className="relative flex gap-x-2">
                <button disabled={qty <= 0} onClick={onDecHandler}>
                  <ArrowIco className="rotate-90 scale-150" />
                </button>
                <input
                  type="text"
                  inputMode="decimal"
                  autoFocus
                  className="w-[45px] border border-[--gray] pl-1
                  text-center text-[18px] text-[--gray] shadow"
                  value={`${qty}`}
                  onInput={onInputHandler}
                />
                <button onClick={onIncHandler}>
                  <ArrowIco className="-rotate-90 scale-150" />
                </button>
              </div>
              <button
                className="rounded-md bg-[--dark] px-4 py-2 text-white transition
                      hover:bg-[--gray-dark] hover:shadow-xl"
              >
                {t?.tips["add to cart"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
