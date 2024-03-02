import { Fragment } from "react";
import BadgeShop from "@shared/ui/badge-shop.tsx";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string | undefined;
  thumbnail: string;
  link: string;
}

function BannerCard({ title = "", thumbnail = "", link = "#" }: Props) {
  const navigate = useNavigate();

  const modTitle = title?.split(" ").map((el) => (
    <Fragment key={el}>
      {el} {el.length > 4 && <br />}
    </Fragment>
  ));

  function onClickHandler() {
    navigate(link);
  }

  return (
    <article
      className="flex h-full w-full cursor-pointer justify-between bg-[--light-blue]"
      onClick={onClickHandler}
    >
      <figure className="banner-thumb relative flex w-full items-end justify-end">
        <img className="object-contain" src={thumbnail} alt="" />
        <figcaption className="absolute left-4 top-2">
          <h4 className="font-thin leading-6 text-[--gray]">{modTitle}</h4>
          <BadgeShop
            className="mt-1 text-[13px] font-semibold uppercase text-[--gray]"
            withIco
          />
        </figcaption>
      </figure>
    </article>
  );
}

export default BannerCard;
