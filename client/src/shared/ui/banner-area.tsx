import { Fragment, useEffect, useState } from "react";
import BannerCard from "@shared/ui/banner-card.tsx";
import apiService from "@app/service/api.service.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { Status } from "../../../../server/src/types/common.ts";

interface Banner {
  _id: string;
  title: string;
  thumbnail: string;
  link: string;
  category: {
    _id: string,
    name: string
  }
  createdAt?: string;
  updatedAt?: string;
}

interface Response {
  status: Status;
  message: string;
  banner: Banner[];
}

function BannerArea() {
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

  const fruits = banner.find(el => el.category.name === 'fruits')!
  const vegetables = banner.find(el => el.category.name === 'vegetables')!
  const seafood = banner.find(el => el.category.name === 'fish and seafood')!
  const bakery = banner.find(el => el.category.name === 'bakery')!



  return (
    <Fragment>
      <ul className="flex h-full justify-between">
        <li className="col-sm">
          <BannerCard
            title={fruits.title}
            thumbnail={fruits.thumbnail}
            link={fruits.link}
          />
        </li>
        <li className="col-lg">
          <BannerCard
            title={vegetables.title}
            thumbnail={vegetables.thumbnail}
            link={vegetables.link}
          />
        </li>
        <li className="col-sm flex h-full flex-col gap-4">
          <BannerCard
            title={bakery.title}
            thumbnail={bakery.thumbnail}
            link={bakery.link}
          />
          <BannerCard
            title={seafood.title}
            thumbnail={seafood.thumbnail}
            link={seafood.link}
          />
        </li>
      </ul>
    </Fragment>
  );
}

export default BannerArea;
