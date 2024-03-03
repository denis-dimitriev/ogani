import { StarGoldIco, StarIco } from "@app/assets/icons";
import { Rating } from "@shared/types/enums/product.types.ts";
import { JSX } from "react";

interface Props {
  rating: Rating;
}

function ProductRating({ rating }: Props) {
  const productRating: JSX.Element[] = Array.from({ length: 5 }).map((_, i) => {
    if (i < rating) {
      return <StarGoldIco key={i} />;
    }
    return <StarIco key={i} />;
  });

  return <div className="flex">{productRating}</div>;
}

export default ProductRating;
