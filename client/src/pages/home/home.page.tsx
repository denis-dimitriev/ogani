import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";
import { ArrowIco, FavoritesIco, ShoppingCartIco } from "@app/assets/icons";
import { Link } from "react-router-dom";
import ProductRating from "@shared/ui/product-rating.tsx";
import ShoppingCart from "@shared/ui/shopping-cart.tsx";
import Action from "@shared/ui/action.tsx";
import CardSm from "@shared/ui/card-sm.tsx";
import FeaturedProducts from "../../features/ui/featured-products.tsx";

function HomePage() {
  return (
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

      <section className="flex h-[450px] w-full gap-[24px]">
        <div className="col-sm">
          <div className="flex items-center justify-between">
            <h5>Featured Products</h5>
            <div className="flex items-center justify-center">
              <button>
                <ArrowIco className="rotate-[90deg] scale-125" />
              </button>
              <button>
                <ArrowIco className="rotate-[-90deg] scale-125" />
              </button>
            </div>
          </div>

          <FeaturedProducts />
        </div>
        <div className="col-xl">
          <h5>New Products</h5>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
