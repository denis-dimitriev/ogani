import { useContext, useEffect, useState } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { ArrowIco, CloseIco } from "@app/assets/icons";
import { LanguageContext } from "@context/language.context.ts";
import ApiService from "@app/service/api.service";
import { ProductType } from "@shared/types/product.types";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";
import Backdrop from "@shared/ui/backdrop.tsx";
import Spinner from "@shared/ui/spinner.tsx";

const ProductQuickView = observer(function () {
  const { productID, setView } = useContext(QuickViewContext);

  const { t, language } = useContext(LanguageContext);
  const [product, setProduct] = useState<ProductType | never>();
  const [qty, setQTY] = useState(0);

  useEffect(() => {
    ApiService.getSingleProduct(productID)
      .then((res) => {
        if (res.data) {
          setProduct(res.data.product);
        }
      })
      .catch((err) => console.error(err));
  }, [productID]);

  const unitQty = product?.unit === "kg" ? 0.5 : 1;

  useEffect(() => {
    const productExistsInCart = ShoppingCartStore.getCart().find(
      (p) => p._id === product?._id,
    );

    if (productExistsInCart) {
      setQTY(productExistsInCart.qty);
    } else {
      setQTY(unitQty);
    }
  }, [unitQty]);

  const onIncHandler = () =>
    setQTY((prev) => {
      if (product && prev >= product?.stock) {
        return product?.stock;
      } else if (prev >= 10) {
        return 10;
      }
      return prev + unitQty;
    });

  const onDecHandler = () => setQTY((prev) => prev - unitQty);

  const onAddToCartHandler = () =>
    ShoppingCartStore.addToCartFromView(product, qty);

  const onViewExitHandler = () => setView(false);

  if (!product) {
    return (
      <Backdrop>
        <Spinner />
      </Backdrop>
    );
  }

  return (
    <div className="quick-view flex items-center justify-center">
      <div
        className="relative h-[500px] w-[900px] animate-fadeQView
       rounded-sm bg-white p-[30px] shadow-2xl"
      >
        <button
          className="group absolute right-3 top-2 rounded-full border
         border-[--gray-lighter] p-0.5 transition hover:border-[--gray]"
          onClick={onViewExitHandler}
        >
          <CloseIco className="scale-75" />
        </button>
        <div className="relative flex gap-x-5">
          <figure className="relative flex max-h-[450px] w-1/2 flex-col justify-center">
            <img
              className="absolute h-full w-full object-contain"
              loading="lazy"
              src={product?.images[0]}
              alt=""
            />
          </figure>
          <div className="flex w-1/2 flex-col">
            <h4 className="mb-5">
              {language === "ro" ? product?.name.ro : product?.name.ru}
            </h4>
            <div className="flex items-center gap-x-2">
              {product?.promo?.has ? (
                <>
                  <p className=" text-[21px]">
                    {product?.promo.price}
                    <span className="text-sm">mdl</span>
                  </p>
                  <p className="text-[17px] line-through">
                    {product?.promo.oldPrice}
                    <span className="text-sm">mdl</span>
                  </p>
                </>
              ) : (
                <p className=" text-[21px]">
                  {product?.price}
                  <span className="text-sm">mdl</span>
                </p>
              )}
            </div>

            {product && product.stock > 0 && (
              <p className="text-[12px]">{t?.product["in stock"]}</p>
            )}

            <ul className="mb-5 mt-4 flex flex-col gap-y-[20px] text-sm">
              <p className="text-[16px] font-bold">{t?.product.info}</p>

              <li className="flex justify-between">
                <span className="font-semibold">{t?.product.description}</span>
                <span>
                  {language === "ro"
                    ? product?.info.description.ro
                    : product?.info.description.ru}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-semibold">{t?.product.terms}</span>
                <span>
                  {language === "ro"
                    ? product?.info.terms.ro
                    : product?.info.terms.ru}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-semibold">{t?.product.manufacturer}</span>
                <span>
                  {language === "ro"
                    ? product?.info.manufacturer.ro
                    : product?.info.manufacturer.ru}
                </span>
              </li>

              <li className="flex justify-between">
                <span className="font-semibold">{t?.product.unit}</span>
                <span>{t?.product[product?.unit as never]}</span>
              </li>
            </ul>

            <div className="flex gap-x-3">
              <div className="relative flex gap-x-2">
                <button disabled={qty <= 0} onClick={onDecHandler}>
                  <ArrowIco className="rotate-90 scale-150" />
                </button>
                <input
                  type="text"
                  inputMode="decimal"
                  readOnly
                  className="w-[75px] border border-[--gray] pl-1
                  text-center text-[18px] text-[--gray] shadow"
                  value={`${qty}${t?.product[product?.unit as never]}`}
                />
                <button
                  disabled={qty >= 10 || qty >= product?.stock}
                  onClick={onIncHandler}
                >
                  <ArrowIco className="-rotate-90 scale-150" />
                </button>
              </div>
              <button
                className="rounded-md bg-[--dark] px-4 py-2 text-white transition
                      hover:bg-[--gray-dark] hover:shadow-xl"
                onClick={onAddToCartHandler}
              >
                {t?.tips["add to cart"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductQuickView;
