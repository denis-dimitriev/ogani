import CardSm from "@shared/ui/card-sm.tsx";
import { ArrowIco } from "@app/assets/icons";
import { Fragment, useState } from "react";
import { Rating } from "@shared/types/enums/product.types.ts";

const products = [
  {
    _id: "1",
    title: "Varza din Moldova",
    thumbnail:
      "https://htmldemo.net/safira/safira/assets/img/product/product8.jpg",
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
    price: 9.0,
    promoPrice: 7.5,
    rating: 3,
    sale: 20,
  },
];

function FeaturedProducts() {
  const [slide, setSlide] = useState<number>(1);

  function next() {
    setSlide((prev) => {
      if (prev == 3) {
        return 3;
      }
      return prev + 1;
    });
  }

  function prev() {
    setSlide((prev) => {
      if (prev == 1) {
        return 1;
      }
      return prev - 1;
    });
  }

  console.log(slide);

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <h5>Featured Products</h5>
        <div className="flex items-center justify-center">
          <button onClick={prev}>
            <ArrowIco className="rotate-[90deg] scale-125" />
          </button>
          <button onClick={next}>
            <ArrowIco className="rotate-[-90deg] scale-125" />
          </button>
        </div>
      </div>
      <div className="flex">
        <ul className="flex gap-2.5 overflow-hidden transition duration-1000">
          <li>
            <ul>
              {products.slice(0, 4).map((p) => (
                <li key={p._id}>
                  <CardSm
                    _id={p._id}
                    title={p.title}
                    thumbnail={p.thumbnail}
                    price={p.price}
                    rating={p.rating as Rating}
                    promoPrice={p.promoPrice}
                    sale={p.sale}
                  />
                </li>
              ))}
            </ul>
          </li>

          <li>
            <ul>
              {products.slice(4, 8).map((p) => (
                <li key={p._id}>
                  <CardSm
                    _id={p._id}
                    title={p.title}
                    thumbnail={p.thumbnail}
                    price={p.price}
                    rating={p.rating as Rating}
                    promoPrice={p.promoPrice}
                    sale={p.sale}
                  />
                </li>
              ))}
            </ul>
          </li>

          <li>
            <ul>
              {products.slice(8, 12).map((p) => (
                <li key={p._id}>
                  <CardSm
                    _id={p._id}
                    title={p.title}
                    thumbnail={p.thumbnail}
                    price={p.price}
                    rating={p.rating as Rating}
                    promoPrice={p.promoPrice}
                    sale={p.sale}
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default FeaturedProducts;
