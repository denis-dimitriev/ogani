import { Fragment, useContext, useEffect, useState } from "react";
import BannerCard from "@shared/ui/banner-card.tsx";
import apiService from "@app/service/api.service.ts";
import Spinner from "@shared/ui/spinner.tsx";

interface IBanner {
  _id: string;
  title: string;
  thumbnail: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

function BannerArea() {
  const [banner, setBanner] = useState<IBanner[] | null>(null);

  useEffect(() => {
    apiService
      .getBanner()
      .then((res) => {
        if (res.data) {
          setBanner(res.data.banner);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!banner) {
    return <Spinner />;
  }

  const first = banner[0];
  const second = banner[1];
  const third = banner[2];
  const fourth = banner[3];

  return (
    <Fragment>
      <ul className="flex h-full justify-between">
        <li className="col-sm shadow-lg">
          <BannerCard
            title={first.title}
            thumbnail={first.thumbnail}
            link={first.link}
          />
        </li>
        <li className="col-lg shadow-lg">
          <BannerCard
            title={second.title}
            thumbnail={second.thumbnail}
            link={second.link}
          />
        </li>
        <li className="col-sm flex h-full flex-col gap-2.5 shadow-lg">
          <BannerCard
            title={third.title}
            thumbnail={third.thumbnail}
            link={third.link}
          />
          <BannerCard
            title={fourth.title}
            thumbnail={fourth.thumbnail}
            link={fourth.link}
          />
        </li>
      </ul>
    </Fragment>
  );
}

export default BannerArea;
