import { ArrowIco } from "@app/assets/icons";
import { useContext, useEffect, useState } from "react";
import ApiService from "@app/service/api.service.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { Link } from "react-router-dom";
import { LanguageContext } from "@context/language.context.tsx";

interface Image {
  name: string;
  path: string;
}

interface CarouselItem {
  createdAt: string;
  image: Image;
  link: string;
  title: string;
  updatedAt: string;
  _id: string;
}

function MainCarousel() {
  const { t } = useContext(LanguageContext);

  const [slides, setSlides] = useState<CarouselItem[] | never[]>([]);
  const [pos, setPos] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function onNextSlide() {
    const maxLimitPos = (slides.length - 1) * 100;
    setPos((prevState) => {
      if (prevState <= -maxLimitPos) {
        return 0;
      }
      return prevState - 100;
    });
  }

  function onPrevSlide() {
    const maxLimitPos = (slides.length - 1) * 100;
    setPos((prevState) => {
      if (prevState == 0) {
        return -maxLimitPos;
      }
      return prevState + 100;
    });
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      onNextSlide();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [pos, slides]);

  // ignore multiple clicks on button
  useEffect(() => {
    setDisabled(true);
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pos]);

  useEffect(() => {
    ApiService.getMainCarousel()
      .then((res) => {
        if (res.data) {
          setSlides(res.data.carousel);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!slides) {
    return <Spinner />;
  }

  return (
    <div className="group relative h-full w-full">
      <ul className="relative flex h-full w-auto overflow-hidden ">
        {slides.map((s) => (
          <li
            className="h-full min-w-full transition-transform duration-1000"
            key={s._id}
            style={{
              transform: `translateX(${pos}%)`,
            }}
          >
            <figure className="relative h-full w-full">
              <img
                src={s.image.path}
                alt=""
                className="h-full w-full object-cover"
              />
              <figcaption className="glass absolute left-[30px] right-[30px] top-[30px] w-1/2 animate-fadeInX p-[30px]">
                <h2 className="mb-5 font-bold capitalize leading-[45px] ">
                  {t?.carousel[s.title as never]}
                </h2>
                <Link
                  to={s.link}
                  className="max-w-[150px] rounded-md bg-[--red] px-6 py-4 text-[--white] shadow-2xl transition hover:bg-[--red-dark]"
                >
                  {t?.common["learn more"]}
                </Link>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <button
        className="absolute left-1 top-[45%] rounded-full bg-white/10 p-1
       transition-all group-hover:bg-white/70"
        disabled={disabled}
        onClick={onPrevSlide}
      >
        <ArrowIco className="h-[35px] w-[35px] rotate-90" />
      </button>
      <button
        className="absolute right-1 top-[45%] rounded-full bg-white/10 p-1
       transition-all group-hover:bg-white/70"
        disabled={disabled}
        onClick={onNextSlide}
      >
        <ArrowIco className="h-[35px] w-[35px] rotate-[-90deg]" />
      </button>
    </div>
  );
}

export default MainCarousel;
