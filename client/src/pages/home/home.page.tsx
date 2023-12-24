import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";
import FeaturedProducts from "@features/ui/featured-products.tsx";
import ProductCard from "@shared/ui/product-card.tsx";
import { Fragment, useContext } from "react";
import ProductQuickView from "@features/ui/product-quick-view.tsx";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { IProduct } from "@shared/ui/product-card-sm.tsx";

const product: IProduct = {
  _id: "1",
  title: "Varza din Moldova",
  thumbnail:
    "https://htmldemo.net/safira/safira/assets/img/product/product23.jpg",
  image: "https://htmldemo.net/safira/safira/assets/img/product/product22.jpg",
  category: "Vegetables",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
    "Commodi cupiditate iusto obcaecati quibusdam similique? Adipisci amet " +
    "cupiditate debitis doloremque eaque est facere id ipsum, itaque laborum natus neque quaerat " +
    "quo sapiente voluptatem. Asperiores doloremque eos est ex " +
    "excepturi illum ipsa optio possimus quia, quis ut veritatis! " +
    "Excepturi laborum molestias optio.",
  price: 9.0,
  promoPrice: 7.5,
  rating: 3,
  sale: 20,
};

function HomePage() {
  const { view } = useContext(QuickViewContext);

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
          <div className="col-sm">
            <FeaturedProducts />
          </div>
          <div className="col-xl">
            <h5>New Products</h5>
            <div className="mt-5 flex w-full justify-between">
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
            </div>
          </div>
        </section>
      </div>
      {view && <ProductQuickView />}
    </Fragment>
  );
}

export default HomePage;
