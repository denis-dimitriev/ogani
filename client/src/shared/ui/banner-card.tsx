import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@context/language.context.tsx";
import { AlTArrowIco } from "@app/assets/icons";

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
        <figure className="h-full">
          <img className="h-full w-full object-fill" src={thumbnail} alt="" />
        </figure>
        <figcaption className="absolute top-0 left-0 right-0">
          <h4>{t?.banner[title as never]}</h4>
          <span className="gap-1 mt-1 ml-1 flex text-[12px] items-center px-2 py-1 w-[150px]">
            {t?.banner["shop now" as never]}
          <AlTArrowIco className="w-[20px] h-[20px] rounded-full" />
          </span>
        </figcaption>
      </Link>
    </div>
  );
}

export default BannerCard;
