import { Fragment, useContext, useEffect, useState } from "react";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { ArrowIco, CloseIco } from "@app/assets/icons";
import { LanguageContext } from "@context/language.context.ts";
import ApiService from "@app/service/api.service";
import { ProductType } from "@shared/types/product.types";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { observer } from "mobx-react-lite";
import { ImagesPreloader } from "@shared/helpers/images.preloader.ts";
import Skeleton from "react-loading-skeleton";

const ProductQuickView = observer(function () {
  const { productID, setView } = useContext(QuickViewContext);

  const { t, language } = useContext(LanguageContext);
  const [product, setProduct] = useState<ProductType | never>();
  const [loading, setLoading] = useState(false);
  const [qty, setQTY] = useState(0);

  useEffect(() => {
    setLoading(true);
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
  }, [product?._id, unitQty]);

  useEffect(() => {
    if (product) {
      ImagesPreloader(product.images).finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000),
      );
    }
  }, [product]);

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
    ShoppingCartStore.addToCartFromView(product!, qty);

  const onViewExitHandler = () => setView(false);

  return (
    <div className="backdrop-dark flex items-center justify-center">
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

        {!product || loading ? (
          <div className="grid h-full grid-cols-2 gap-[24px]">
            <div>
              <div>
                <Skeleton className="h-[400px] w-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <Skeleton className="max-w-[200px] p-4" />
              <Skeleton className="mt-[20px] max-w-[150px] p-2" />
              <Skeleton className="mt-[20px] max-w-[250px]" />
              <Skeleton className="mt-[20px] p-5" />
              <Skeleton className="mt-[20px]" count={3} />
              <div className="flex justify-start gap-[24px]">
                <Skeleton className="mt-[20px] min-w-[150px] p-4" />
                <Skeleton className="mt-[20px] min-w-[150px] p-4" />
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <div className="grid grid-cols-2 gap-[24px]">
              <figure className="flex max-h-[450px] flex-col justify-center">
                <img
                  className="h-full w-full object-contain"
                  src={product?.images[0]}
                  alt=""
                />
              </figure>
              <div className="flex flex-col">
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
                    <span className="font-semibold">
                      {t?.product.description}
                    </span>
                    <span className="ml-16">
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
                    <span className="font-semibold">
                      {t?.product.manufacturer}
                    </span>
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
          </Fragment>
        )}
      </div>
    </div>
  );
});

export default ProductQuickView;
