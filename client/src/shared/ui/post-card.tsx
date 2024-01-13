import { Link } from "react-router-dom";
import { AlTArrowIco } from "@app/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

function PostCard() {
  const { t } = useContext(LanguageContext);

  return (
    <article className="h-full w-full rounded border border-[--light]">
      <figure className="flex h-full w-full flex-col gap-2 bg-white">
        <Link to={""}>
          <img
            src="https://htmldemo.net/safira/safira/assets/img/blog/blog3.jpg"
            alt=""
          />
        </Link>
        <figcaption className="min-h-[120px]">
          <Link to="" className="flex h-full flex-col justify-between">
            <p>01/01/2024</p>
            <h3 className="leading-7">Cum sa prepari salata din rosii</h3>
            <span className="inline-flex items-center gap-x-1 text-[13px] font-semibold uppercase text-[--gray]">
              {t?.common["learn more"]}
              <AlTArrowIco />
            </span>
          </Link>
        </figcaption>
      </figure>
    </article>
  );
}

export default PostCard;
