import { breakPhrase } from "@shared/helpers/break-phrase.tsx";
import BadgeShop from "@shared/ui/badge-shop.tsx";
import { useNavigate } from "react-router-dom";

interface Props {
  thumbnail: string;
  title: string;
  link: string;
}

function BannerCardSm({ title, thumbnail, link = "#" }: Props) {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate(link);
  }

  return (
    <article
      className="flex h-full w-full cursor-pointer justify-between bg-blue-100/40"
      onClick={onClickHandler}
    >
      <figure className="banner-thumb relative flex w-full items-center justify-end">
        <img className="object-cover" src={thumbnail} alt="" />
        <figcaption className="absolute left-4">
          <h4 className="font-thin leading-6">{breakPhrase(title)}</h4>
          <BadgeShop
            className="mt-1 text-[13px] font-semibold uppercase text-[--gray]"
            withIco
          />
        </figcaption>
      </figure>
    </article>
  );
}

export default BannerCardSm;
