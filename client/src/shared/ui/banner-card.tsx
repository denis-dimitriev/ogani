import { Link } from "react-router-dom";
import { Fragment, ReactNode } from "react";

interface Props {
  title?: string;
  thumbnail?: string;
  link?: string;
  children?: ReactNode;
}

function BannerCard({
  title = "",
  thumbnail = "",
  link = "#",
  children,
}: Props) {
  const modTitle = title?.split(" ").map((el) => (
    <Fragment key={el}>
      {el} {el.length > 4 && <br />}
    </Fragment>
  ));

  return (
    <article className="banner-thumb h-full w-full rounded-md">
      <Link to={link}>
        <figure className="h-full">
          <img className="h-full w-full object-fill" src={thumbnail} alt="" />
          <figcaption className="absolute left-2 top-1 rounded-2xl bg-white/60 p-1">
            <h3 className="leading-8">{modTitle}</h3>
            {children}
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

export default BannerCard;
