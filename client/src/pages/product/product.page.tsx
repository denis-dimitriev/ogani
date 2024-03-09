import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { ProductType } from "@shared/types/product.types.ts";
import ApiService from "@app/service/api.service.ts";
import ShoppingCartStore from "@app/store/shopping-cart.store.ts";
import { ArrowIco } from "@app/assets/icons";
import Backdrop from "@shared/ui/backdrop.tsx";
import CategoriesMenu from "@widgets/categories-menu.tsx";
import SetRating from "@widgets/ui/set-rating.tsx";
import Skeleton from "react-loading-skeleton";
import { ImagesPreloader } from "@shared/helpers/images.preloader.ts";

function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState<ProductType | never>();
  const [qty, setQTY] = useState(0);
  const [slide, setSlide] = useState<string>("");
  const { t, language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
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

  useEffect(() => {
    if (product) {
      ImagesPreloader(product.images).finally(() =>
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "auto";
        }, 800),
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

  function onSketchClickHandler(sketch: string) {
    const imageId = sketch
      .replace("https://ucarecdn.com/", "")
      .split("/")
      .shift();
    const slide = product?.images.find((img) => img.includes(imageId!));

    if (slide) {
      setSlide(slide);
    }
  }

  if (!product || loading) {
    return (
      <Backdrop>
        <div className="container mt-[250px] grid h-full grid-cols-2 gap-[24px]">
          <div>
            <div>
              <Skeleton className="h-[400px] w-full" />
            </div>
            <div className="mt-5 flex gap-[24px]">
              <Skeleton className="h-[90px] min-w-[90px]" />
              <Skeleton className="h-[90px] min-w-[90px]" />
            </div>
          </div>
          <div className="flex flex-col">
            <Skeleton className="max-w-[250px] p-4" />
            <Skeleton className="mt-[30px] max-w-[200px] p-2" />
            <Skeleton className="mt-[30px] max-w-[200px] p-2" />
            <Skeleton className="mt-[30px] max-w-[200px] p-2" />
            <Skeleton className="mt-[30px]" count={4} />
            <div className="flex justify-center gap-[24px]">
              <Skeleton className="mt-[30px] min-w-[150px] p-4" />
              <Skeleton className="mt-[30px] min-w-[150px] p-4" />
            </div>
          </div>
        </div>
      </Backdrop>
    );
  }

  return (
    <div className="container relative min-h-full">
      <CategoriesMenu />
      <div className="mt-[50px] grid grid-cols-2 gap-[24px]">
        <figure className="flex flex-col">
          <ul className="h-[450px] w-full">
            {product.images.map((image: string) => (
              <li
                key={image}
                className={`${slide === image ? "block" : "hidden"} appearance`}
              >
                <img
                  src={image}
                  className="max-h-[450px] w-full object-contain"
                  alt=""
                />
              </li>
            ))}
          </ul>

          <div className="">
            <ul className="flex gap-[24px]">
              <li
                className="flex h-[60px] w-[60px] cursor-pointer items-center rounded
              border border-[--gray-light]"
                onClick={() => onSketchClickHandler(product?.thumbnail)}
              >
                <img src={product.thumbnail} alt="" />
              </li>
              <li
                className="flex h-[60px] w-[60px] cursor-pointer items-center rounded
              border border-[--gray-light]"
                onClick={() => onSketchClickHandler(product?.sketch)}
              >
                <img src={product.sketch} alt="" />
              </li>
            </ul>
          </div>
        </figure>

        <div className="flex flex-col justify-between">
          <h3 className="mb-5">
            {language === "ro" ? product.name.ro : product.name.ru}
          </h3>

          <div className="flex items-center gap-2">
            <SetRating incomingRating={product.rating} />
          </div>

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
