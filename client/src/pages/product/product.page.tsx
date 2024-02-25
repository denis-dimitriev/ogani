import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { ProductType } from "@shared/types/product.types.ts";
import ApiService from "@app/service/api.service.ts";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { ArrowIco } from "@app/assets/icons";
import Backdrop from "@shared/ui/backdrop.tsx";
import Spinner from "@shared/ui/spinner.tsx";
import CategoriesMenu from "@widgets/categories-menu.tsx";

function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState<ProductType | never>();
  const [qty, setQTY] = useState(0);
  const [slide, setSlide] = useState<string>("");
  const { t, language } = useContext(LanguageContext);

  useEffect(() => {
    ApiService.getSingleProduct(productID!)
      .then((res) => {
        if (res.data) {
          setProduct(res.data.product);
          setSlide(res.data.product.images[0]);
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
    ShoppingCartStore.addToCartFromView(product!, qty);

  if (!product) {
    return (
      <Backdrop>
        <Spinner />
      </Backdrop>
    );
  }

  return (
    <div className="container relative min-h-screen">
      <CategoriesMenu />
      <div className="grid grid-cols-2 gap-[24px]">
        <figure className="flex flex-col">
          <ul className="h-[450px] w-full">
            {product.images.map((image) => (
              <li
                key={image}
                className={`${slide === image ? "block" : "hidden"} appearance`}
              >
                <img
                  className="h-full w-full object-contain"
                  loading="lazy"
                  src={image}
                  alt=""
                />
              </li>
            ))}
          </ul>

          <div className="flex h-[90px] w-[90px] items-center rounded border-2 border-[--gray-light]">
            <ul>
              {product.images.map((image) => (
                <li
                  key={image}
                  className={`${
                    slide !== image ? "block opacity-100" : "hidden opacity-0"
                  } cursor-pointer duration-300`}
                  onClick={() => setSlide(image)}
                >
                  <img
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={image}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </figure>

        <div className="flex flex-col justify-between">
          <h3 className="mb-5">
            {language === "ro" ? product.name.ro : product.name.ru}
          </h3>
          <div className="flex items-center gap-x-2">
            {product?.promo?.has ? (
              <>
                <p className=" text-[24px]">
                  {product?.promo.price}
                  <span className="text-sm">mdl</span>
                </p>
                <p className="text-[17px] line-through">
                  {product?.promo.oldPrice}
                  <span className="text-sm">mdl</span>
                </p>
              </>
            ) : (
              <p className="text-[24px]">
                {product?.price}
                <span className="text-sm">mdl</span>
              </p>
            )}
          </div>

          {product && product.stock > 0 && (
            <p className="text-[15px]">{t?.product["in stock"]}</p>
          )}

          <ul className="mb-5 mt-4 flex flex-col gap-y-[20px]">
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

          <div className="flex justify-center gap-x-3">
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
  );
}

export default ProductPage;
