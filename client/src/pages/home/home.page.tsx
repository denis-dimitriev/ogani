import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";
import BannerArea from "@shared/ui/banner-area.tsx";

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

      <section className="max-h-[450px] w-full">
        <BannerArea />
      </section>
    </div>
  );
}

export default HomePage;
