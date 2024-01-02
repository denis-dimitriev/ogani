import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";
import FeaturedProductsSlider from "@features/ui/featured-products-slider.tsx";
import ProductCard from "@shared/ui/product-card.tsx";
import { Fragment, useContext } from "react";
import ProductQuickView from "@features/ui/product-quick-view.tsx";
import { QuickViewContext } from "@context/quick-view.context.ts";
import { IProduct } from "@shared/ui/product-card-sm.tsx";
import BannerCard from "@shared/ui/banner-card.tsx";
import { LanguageContext } from "@context/language.context.tsx";
import BadgeShop from "@shared/ui/badge-shop.tsx";
import { ArrowIco } from "@app/assets/icons";
import HotDealsSlider from "@features/ui/hot-deals-slider.tsx";

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

const products: IProduct[] = [
  {
    _id: "1",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
  {
    _id: "2",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 4,
    sale: 20,
  },
  {
    _id: "3",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 5,
    sale: 20,
  },
  {
    _id: "4",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
  {
    _id: "5",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 5,
    sale: 20,
  },
  {
    _id: "6",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 5,
    sale: 20,
  },
  {
    _id: "7",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 4,
    sale: 20,
  },
  {
    _id: "8",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
  {
    _id: "9",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
  {
    _id: "10",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
  {
    _id: "11",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
    rating: 5,
    sale: 20,
  },
  {
    _id: "12",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://htmldemo.net/safira/safira/assets/img/product/product1.jpg",
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
  },
];

function HomePage() {
  const { view } = useContext(QuickViewContext);
  const { t } = useContext(LanguageContext);

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
          <div className="col-sm flex flex-col gap-[50px]">
            <FeaturedProductsSlider />
            <article className="h-[450px]">
              <BannerCard
                thumbnail={
                  "https://img.freepik.com/premium-psd/vegetable-flying-wooden-box-rendering_75891-1122.jpg?w=740"
                }
                title={t?.banner["sale up to 50%"]}
              >
                <BadgeShop className="mt-2 bg-[--red] uppercase text-white" />
              </BannerCard>
            </article>

            <article className="h-[450px]">
              <HotDealsSlider
                title={t?.common["hot deals"]}
                products={products}
              />
            </article>
          </div>
          <div className="col-xl">
            <h5>New Products</h5>
            <div className="mt-5 flex h-auto flex-wrap justify-center gap-x-2 gap-y-[30px]">
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
            </div>
            <div className="mt-[65px] flex h-[200px] gap-[24px]">
              <BannerCard
                thumbnail={
                  "https://img.freepik.com/premium-photo/fresh-raw-beef-steak-isolated-white-background-with-clipping-path_228338-124.jpg?w=1060"
                }
                title={t?.banner["sale up to 50%"]}
              >
                <BadgeShop className="mt-2 bg-[--red] uppercase text-white" />
              </BannerCard>

              <BannerCard
                thumbnail={
                  "https://img.freepik.com/premium-photo/dairy-products_165536-6534.jpg"
                }
                title={t?.banner["sale up to 50%"]}
              >
                <BadgeShop className="mt-2 bg-[--red] uppercase text-white" />
              </BannerCard>
            </div>
          </div>
        </section>
      </div>
      {view && <ProductQuickView />}
    </Fragment>
  );
}

export default HomePage;
