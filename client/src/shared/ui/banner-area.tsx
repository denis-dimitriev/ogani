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

  const first = banner[0];
  const second = banner[1];
  const third = banner[2];
  const fourth = banner[3];

  return (
    <Fragment>
      <ul className="flex h-full justify-between">
        <li className="col-sm">
          <BannerCard
            title={first.title}
            thumbnail={first.thumbnail}
            link={first.link}
          />
        </li>
        <li className="col-lg">
          <BannerCard
            title={second.title}
            thumbnail={second?.thumbnail}
            link={second.link}
          />
        </li>
        <li className="col-sm flex h-full flex-col gap-2.5">
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
