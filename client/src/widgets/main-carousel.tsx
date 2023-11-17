import tomato from "@app/assets/img/slide-tomatos.png";
import { ArrowIco } from "@app/assets/icons";
import { useEffect, useState } from "react";

const slidesDB = [
  {
    id: "1",
    title: "fruits & vegetables from local manufacturer",
    thumbnail: tomato,
  },
  { id: "2", title: "Autumn Sale 50% Off", thumbnail: tomato },
  { id: "3", title: "fresh meat from local farmers", thumbnail: tomato },
  { id: "4", title: "fresh fruits from turkey", thumbnail: tomato },
];

function MainCarousel() {
  const [slides, setSlides] = useState(slidesDB);
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
    }, 5000);

    return () => clearTimeout(timeout);
  }, [pos]);

  // ignore multiple clicks on button
  useEffect(() => {
    setDisabled(true);
    const timeout = setTimeout(() => {
      setDisabled(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pos]);

  return (
    <div className="group relative h-full w-full">
      <ul className="relative flex h-full w-auto overflow-hidden ">
        {slides.map((s) => (
          <li
            className="h-full min-w-full transition-transform duration-1000"
            key={s.id}
            style={{
              transform: `translateX(${pos}%)`,
            }}
          >
            <figure className="relative h-full w-full">
              <img
                src={s.thumbnail}
                alt=""
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute left-[30px] top-[30px] w-1/2">
                <h1 className="capitalize leading-[70px]">{s.title}</h1>
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
