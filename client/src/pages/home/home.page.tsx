import CategoriesMenu from "@widgets/categories-menu.tsx";
import MainCarousel from "@widgets/main-carousel.tsx";

function HomePage() {
  return (
    <div className="container">
      <section className="flex h-[450px] gap-[24px]">
        <div className="col-sm h-full">
          <CategoriesMenu />
        </div>
        <div className="col-xl h-full">
          <MainCarousel />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
