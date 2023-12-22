import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";
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

      <section className="flex h-auto w-full gap-[24px]">
        <div className="col-sm">
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
