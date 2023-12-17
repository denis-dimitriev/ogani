import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";

interface Props {
  title?: string;
  thumbnail?: string;
  link?: string;
}

function BannerCard({ title = "", thumbnail = "", link = "#" }: Props) {
  const { t } = useContext(LanguageContext);

  return (
    <div className="banner-thumb h-full w-full rounded-md">
      <Link to={link}>
        <figure className="flex h-full">
          <img className="h-full w-full object-fill" src={thumbnail} alt="" />
          <figcaption className="glass absolute left-0 top-0">
            <h4>{t?.banner[title as never]}</h4>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default BannerCard;
