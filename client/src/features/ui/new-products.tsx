import ProductCard from "@shared/ui/product-card.tsx";
import { useSlider } from "@shared/helpers/slider.hook.ts";
import SectionHeader from "@shared/ui/section-header.tsx";

function NewProducts() {
  const { pos, prev, next } = useSlider(products.length / 4);
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title={"New Product"} prev={prev} next={next} />

      <ul className="flex flex-col gap-y-[20px]">
        <li>
          <ul className="flex overflow-hidden">
            {products.slice(0, 6).map((p) => (
              <li
                key={p._id}
                className="pr-[15px] transition duration-500"
                style={{
                  transform: `translateX(${pos}%)`,
                }}
              >
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </li>

        <li>
          <ul className="flex overflow-hidden">
            {products.slice(6, 12).map((p) => (
              <li
                key={p._id}
                className="pr-[15px] transition duration-500"
                style={{
                  transform: `translateX(${pos}%)`,
                }}
              >
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NewProducts;
