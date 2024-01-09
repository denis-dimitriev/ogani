import { Fragment, useContext, useEffect, useState } from "react";
import apiService from "@app/service/api.service.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { Status } from "../../../../server/src/types/common.ts";
import { LanguageContext } from "@context/language.context.tsx";
import BannerCard from "@shared/ui/banner-card.tsx";

interface Banner {
  _id: string;
  title: string;
  thumbnail: string;
  link: string;
  category: {
    _id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

interface Response {
  status: Status;
  message: string;
  banner: Banner[];
}

function BannerArea() {
  const { t } = useContext(LanguageContext);

  const [banner, setBanner] = useState<Banner[]>([]);

  useEffect(() => {
    apiService
      .getBanner()
      .then((res) => {
        if (res.data as Response) {
          setBanner(res.data.banner);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (banner.length == 0) {
    return <Spinner />;
  }

  const fruits = banner.find((el) => el.category.name === "fruits")!;
  const vegetables = banner.find((el) => el.category.name === "vegetables")!;
  const seafood = banner.find((el) => el.category.name === "fish and seafood")!;
  const bakery = banner.find((el) => el.category.name === "bakery")!;

  return (
    <Fragment>
      <ul className="flex h-full justify-between">
        <li className="col-sm">
          <BannerCard
            title={t?.banner["fresh fruits" as never]}
            thumbnail={fruits.thumbnail}
            link={fruits.link}
          />
        </li>
        <li className="col-lg">
          <BannerCard
            title={t?.banner["fresh vegetables" as never]}
            thumbnail={vegetables.thumbnail}
            link={vegetables.link}
          />
        </li>
        <li className="col-sm flex h-full flex-col gap-4">
          <BannerCard
            title={t?.banner[bakery.title as never]}
            thumbnail={bakery.thumbnail}
            link={bakery.link}
          />

          <BannerCard
            title={t?.banner[seafood.title as never]}
            thumbnail={seafood.thumbnail}
            link={seafood.link}
          />
        </li>
      </ul>
    </Fragment>
  );
}

export default BannerArea;
