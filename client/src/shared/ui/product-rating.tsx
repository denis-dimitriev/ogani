import { StarGoldIco, StarIco } from "@app/assets/icons";
import { Rating } from "@shared/types/enums/product.types.ts";

interface Props {
  rating: Rating;
}

function ProductRating({ rating }: Props) {
  const productRating: JSX.Element[] = Array.from({ length: 5 }).map((_, i) => {
    if (i < rating) {
      return <StarGoldIco key={i} className="scale-75" />;
    }
    return <StarIco key={i} className="scale-75" />;
  });

  return <>{productRating}</>;
}

export default ProductRating;
