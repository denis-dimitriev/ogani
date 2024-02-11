import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";
import FeaturedProducts from "@features/ui/featured-products.tsx";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductQuickView from "@features/ui/product-quick-view.tsx";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { LanguageContext } from "@context/language.context.ts";
import HotDeals from "@features/ui/hot-deals.tsx";
import musli_berries from "app/assets/img/muesli-with-berries.png";
import meat from "app/assets/img/meat.png";
import daury_products from "app/assets/img/dairy-products.png";
import sos_condim from "app/assets/img/sos&condiments.png";
import nuts from "app/assets/img/nuts.png";
import BadgeShop from "@shared/ui/badge-shop.tsx";
import NewProducts from "@features/ui/new-products.tsx";
import BannerCardSm from "@shared/ui/banner-card-sm.tsx";
import OurProducts from "@features/ui/our-products.tsx";
import ReviewsSlider from "@features/ui/reviews-slider.tsx";
import BlogsSection from "@widgets/blogs-section.tsx";
import apiService from "@app/service/api.service.ts";
import ProductCard from "@shared/ui/product-card.tsx";
import { CATEGORIES } from "@shared/types/enums/categories.ts";

function HomePage() {
  const { view } = useContext(QuickViewContext);
  const { t } = useContext(LanguageContext);

  const [items, setItems] = useState();

  useEffect(() => {
    apiService
      .getProductsByCategory(CATEGORIES.SALAMI_AND_CHEESE)
      .then((res) => {
        if (res.data) {
          setItems(res.data.products);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <div className="container flex flex-col gap-[50px]">
        <section className="flex h-[450px] gap-[24px]">
          <div className="col-sm h-full">
            <CategoriesMenu />
          </div>
          <div className="col-xl h-full">
            <MainCarousel />
          </div>
        </section>

        <section className="h-[450px] w-full">
          <BannerArea />
        </section>

        <section className="flex h-auto w-full gap-[24px]">
          <div className="col-sm flex  flex-col gap-[50px]">
            <FeaturedProducts />

            <article className="flex h-[450px] w-full cursor-pointer justify-between bg-blue-100/40">
              <figure className="banner-thumb relative flex h-full w-full items-end">
                <img className="object-contain" src={musli_berries} alt="" />
                <figcaption className="absolute left-5 top-4">
                  <h4 className="font-thin leading-8">
                    {t?.banner["save up to"]}&nbsp;
                    <span className="font-bold">50%</span>
                  </h4>
                  <BadgeShop
                    className="mt-3 bg-[--red] px-2 py-1
                   text-[13px] font-thin uppercase text-white"
                  />
                </figcaption>
              </figure>
            </article>
          </div>

          <ul className="flex flex-wrap justify-between">
            {items?.map((p) => (
              <li key={p._id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>

          {/*
          <div className="col-xl flex flex-col justify-between">
            <NewProducts />

            <div className="mt-[40px] flex h-[150px] gap-[24px]">
              <BannerCardSm
                thumbnail={meat}
                title={t?.banner["fresh meat"] as string}
                link={""}
              />

              <BannerCardSm
                thumbnail={daury_products}
                title={t?.categories["dairy products"] as string}
                link={""}
              />
            </div>

            <div className="mt-6 flex h-[150px] gap-[24px]">
              <BannerCardSm
                thumbnail={sos_condim}
                title={t?.categories["sauces and spices"] as string}
                link={""}
              />

              <BannerCardSm
                thumbnail={nuts}
                title={t?.categories["nuts and seeds"] as string}
                link={""}
              />
            </div>
          </div>
        </section>

        <section className="flex h-[450px] w-full items-start gap-[24px]">
          <div className="col-sm">
            <HotDeals products={products} />
          </div>

          <div className="col-xl">
            <OurProducts />
          </div>
        </section>

        <section className="flex h-[450px]  w-full items-start gap-[24px]">
          <div className="col-sm h-full">
            <ReviewsSlider />
          </div>
          <div className="col-xl">
            <OurProducts />
          </div>*/}
        </section>

        <section className="h-[450px] w-full">
          <BlogsSection />
        </section>
      </div>

      {view && <ProductQuickView />}
    </Fragment>
  );
}

export default HomePage;
