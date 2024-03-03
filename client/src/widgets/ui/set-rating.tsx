import { FormEvent, useContext, useState } from "react";
import { LanguageContext } from "@context/language.context.ts";
import { StarGoldIco, StarIco, OKIco, ConfirmIco } from "@app/assets/icons";
import { Rating } from "@shared/types/enums/product.types.ts";
import ProductRating from "@shared/ui/product-rating.tsx";

interface Props {
  incomingRating: Rating;
}

type StarType = {
  value: Rating;
  icon: "empty" | "gold";
};

const starsDef: StarType[] = [
  { value: 1, icon: "empty" },
  { value: 2, icon: "empty" },
  { value: 3, icon: "empty" },
  { value: 4, icon: "empty" },
  { value: 5, icon: "empty" },
];

function SetRating({ incomingRating }: Props) {
  const { t } = useContext(LanguageContext);

  const [userRateProduct, setUserRateProduct] = useState(false);

  const [stars, setStars] = useState<StarType[]>(starsDef);
  const [rating, setRating] = useState<Rating | null>(null);

  function onClickTipHandler() {
    setUserRateProduct(true);
  }

  function onMouseEnterHandler(idx: number) {
    setStars((prev) => {
      return prev.map((s, i) => {
        if (i <= idx) {
          s.icon = "gold";
        }
        return s;
      });
    });
  }

  function onMouseLeaveHandler(idx: number) {
    setStars((prev) => {
      return prev.map((s, i) => {
        if (i <= idx) {
          s.icon = "empty";
        }
        if (rating && i < rating) {
          s.icon = "gold";
        }
        return s;
      });
    });
  }

  function onClickStarHandler(idx: number) {
    setRating((idx + 1) as Rating);

    setStars((prev) => {
      return prev.map((s, i) => {
        if (i <= idx) {
          s.icon = "gold";
        } else {
          s.icon = "empty";
        }
        return s;
      });
    });
  }

  function onSubmit(e: FormEvent) {
    // TODO update product on server!
  }

  return (
    <div className="flex flex-col gap-3">
      {userRateProduct ? (
        <form onSubmit={onSubmit} className="flex">
          {stars.map((s, i) => (
            <button
              key={i}
              type="button"
              onMouseEnter={() => onMouseEnterHandler(i)}
              onMouseLeave={() => onMouseLeaveHandler(i)}
              onClick={() => onClickStarHandler(i)}
            >
              {s.icon == "gold" ? (
                <StarGoldIco
                  className={`${rating == null && "animate-bounce"}`}
                />
              ) : (
                <StarIco className={`${userRateProduct && "animate-bounce"}`} />
              )}
            </button>
          ))}

          {rating && (
            <div className="appearance ml-3 flex gap-2">
              <span className="text-sm">Confirma</span>
              <button type="submit" className="">
                <ConfirmIco />
              </button>
            </div>
          )}
        </form>
      ) : (
        <ProductRating rating={incomingRating} />
      )}

      {userRateProduct ? (
        ""
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {t?.rating["put a star too"].concat("!")}
          </span>
          <button
            type="button"
            onClick={onClickTipHandler}
            className="text-[14px] text-black transition duration-300 hover:text-[--dark]"
          >
            <OKIco />
          </button>
        </div>
      )}
    </div>
  );
}

export default SetRating;
