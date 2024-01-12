import { IProduct } from "@shared/ui/product-card-sm.tsx";
import ProductCard from "@shared/ui/product-card.tsx";
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

function NewProducts() {
  const { pos, prev, next } = useSlider(products.length / 4);
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title={"New Products"} prev={prev} next={next} />

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
