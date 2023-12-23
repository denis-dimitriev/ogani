import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import Action from "@shared/ui/action.tsx";
import Badge from "@shared/ui/badge.tsx";

interface Props {}

const p = {
  _id: "8",
  title: "Varza din Moldova",
  thumbnail:
    "https://htmldemo.net/safira/safira/assets/img/product/product22.jpg",
  image: "https://htmldemo.net/safira/safira/assets/img/product/product23.jpg",
  price: 9.0,
  category: "Vegetables",
  promoPrice: 7.5,
  rating: 3,
  sale: 20,
};

function ProductCard() {
  const { t } = useContext(LanguageContext);

  return (
    <article className="col-sm rounded border border-[--light] shadow">
      <Link to={"#"} className="group relative flex flex-col items-center">
        <figure className="relative">
          <img
            className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={p.thumbnail}
            alt=""
          />
          <img className="" src={p.image} alt="" />
          <Badge className="absolute left-5 top-3 z-10">
            {t?.product.discount}
          </Badge>
          <Badge className="absolute right-5 top-3 z-10">
            {t?.product.new}
          </Badge>

          <Action
            className="invisible absolute bottom-0 left-[50px] translate-y-1/3 opacity-0 transition
                       duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
            _id={p._id}
          />
        </figure>
        <figcaption className="text-center">
          <p>{p.title}</p>
          <small>{p.category}</small>
          <div className="flex items-center justify-center gap-x-2">
            <p>
              <span className="font-semibold text-[--red-dark]">
                {p.promoPrice}
                <span className="text-sm">lei</span>
              </span>
            </p>
            <p className="line-through">
              {p.price}
              <span className="text-sm">lei</span>
            </p>
          </div>
        </figcaption>
      </Link>
    </article>
  );
}

export default ProductCard;
