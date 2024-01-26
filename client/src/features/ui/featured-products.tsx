import ProductCardSm, { IProduct } from "@shared/ui/product-card-sm.tsx";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { useSlider } from "@shared/helpers/slider.hook.ts";
import SectionHeader from "@shared/ui/section-header.tsx";

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
    unit: "kg",
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
    unit: "kg",
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
    unit: "kg",
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
    unit: "kg",
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
    unit: "kg",
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
    unit: "kg",
  },
  {
    _id: "7",
    title: "Lapte din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://www.casutamea.md/uploaded/620cce55a6091.png",
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
    unit: "pcs",
  },
  {
    _id: "8",
    title: "Chefir CAsuta mea",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image:
      "https://lapmol.md/images/site/cache/4f/4d/4f4dfce9c75e986fd341a83e18465ef1.png",
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
    unit: "pcs",
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
    unit: "kg",
  },
  {
    _id: "10",
    title: "Smantana dulce",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image:
      "https://lapmol.md/images/site/cache/f4/dc/f4dc4962b7a07b21f33c605991767226.png",
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
    unit: "pcs",
  },
  {
    _id: "11",
    title: "Smantana Casuta mea",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image:
      "https://lapmol.md/images/site/cache/93/d0/93d0d15f73637a9d9819019d835320a4.png",
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
    unit: "pcs",
  },
  {
    _id: "12",
    title: "Smantana Casuta mea",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
    image: "https://casutamea.md/uploaded/620cd04ee401b.png",
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
    unit: "pcs",
  },
];

function FeaturedProducts() {
  const { t } = useContext(LanguageContext);
  const { pos, next, prev } = useSlider(products.slice(0, 3).length - 1);

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title={t?.common.featured as string}
        prev={prev}
        next={next}
      />
      <ul className="flex overflow-hidden">
        <li
          className="transition duration-500"
          style={{
            transform: `translateX(${pos}%)`,
          }}
        >
          <ul className="flex flex-col gap-y-[50px]">
            {products.slice(0, 4).map((p) => (
              <li key={p._id}>
                <ProductCardSm product={p} />
              </li>
            ))}
          </ul>
        </li>

        <li
          className="transition duration-500"
          style={{
            transform: `translateX(${pos}%)`,
          }}
        >
          <ul className="flex flex-col gap-y-[50px]">
            {products.slice(4, 8).map((p) => (
              <li key={p._id}>
                <ProductCardSm product={p} />
              </li>
            ))}
          </ul>
        </li>

        <li
          className="transition duration-500"
          style={{
            transform: `translateX(${pos}%)`,
          }}
        >
          <ul className="flex flex-col gap-y-[50px]">
            {products.slice(8, 12).map((p) => (
              <li key={p._id}>
                <ProductCardSm product={p} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FeaturedProducts;
