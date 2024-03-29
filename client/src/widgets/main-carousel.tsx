import { ArrowIco } from "@app/assets/icons";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import ApiService from "@app/service/api.service.ts";
import Spinner from "@shared/ui/spinner.tsx";
import { Link } from "react-router-dom";
import { LanguageContext } from "@context/language.context.ts";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onNextSlide() {
    const maxLimitPos = (slides.length - 1) * 100;
    setPos((prevState) => {
      if (prevState <= -maxLimitPos) {
        return 0;
      }
      return prevState - 100;
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onPrevSlide() {
    const maxLimitPos = (slides.length - 1) * 100;
    setPos((prevState) => {
      if (prevState == 0) {
        return -maxLimitPos;
      }
      return prevState + 100;
    });
  }

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      onNextSlide();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [onNextSlide, onPrevSlide]);

  // ignore multiple clicks on button
  useMemo(() => {
    setDisabled(true);
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 1000);

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
              <figcaption
                className="glass figcaption absolute left-[30px] top-[30px]
              max-w-[300px] p-[30px]"
              >
                <h2 className="mb-5 font-[500] capitalize leading-[45px]">
                  {t?.carousel[s.title as never]}
                </h2>
                <Link
                  to={s.link}
                  className="max-w-[150px] rounded-md bg-[--red] px-6 py-4 text-[--white]
                  shadow-2xl hover:bg-[--red-dark] hover:transition"
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
