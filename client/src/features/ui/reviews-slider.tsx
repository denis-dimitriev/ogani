import ReviewCard from "@shared/ui/review-card.tsx";
import { useCallback, useState } from "react";

const reviewsMoc = [
  {
    _id: "1",
    image:
      "https://htmldemo.net/safira/safira/assets/img/about/testimonial2.png",
    text:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores\n" +
      "            fugiat fugit ipsam nemo optio praesentium repellendus suscipit totam\n" +
      "            veniam?",
    username: "FirstName LastName",
    active: true,
  },
  {
    _id: "2",
    image:
      "https://htmldemo.net/safira/safira/assets/img/about/testimonial2.png",
    text:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores\n" +
      "            fugiat fugit ipsam nemo optio praesentium repellendus suscipit totam\n" +
      "            veniam?",
    username: "FirstName LastName",
    active: false,
  },
  {
    _id: "3",
    image:
      "https://htmldemo.net/safira/safira/assets/img/about/testimonial2.png",
    text:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores\n" +
      "            fugiat fugit ipsam nemo optio praesentium repellendus suscipit totam\n" +
      "            veniam?",
    username: "FirstName LastName",
    active: false,
  },
  {
    _id: "4",
    image:
      "https://htmldemo.net/safira/safira/assets/img/about/testimonial2.png",
    text:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores\n" +
      "            fugiat fugit ipsam nemo optio praesentium repellendus suscipit totam\n" +
      "            veniam?",
    username: "FirstName LastName",
    active: false,
  },
];

function ReviewsSlider() {
  const [reviews, setReviews] = useState(reviewsMoc);
  const [pos, setPos] = useState(0);

  const onSetActiveHandler = useCallback(
    (id: string) => {
      const index = reviews.findIndex((r) => r._id === id);
      setReviews((prev) => {
        return prev.map((r) => {
          r.active = r._id === id;
          return r;
        });
      });
      setPos(index * 100);
    },
    [reviews],
  );

  return (
    <div className="relative flex h-full w-full flex-col gap-4 rounded bg-[--light]">
      <h4 className="mt-2 text-[--darkest]">Reviews</h4>
      <ul className="flex overflow-hidden">
        {reviews.map((r) => (
          <li
            key={r._id}
            className="min-w-[258px] transition duration-300"
            style={{
              transform: `translateX(-${pos}%)`,
            }}
          >
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>

      <div className="absolute bottom-4 mt-2 flex w-full justify-center gap-x-3">
        {reviews.map((r) => (
          <button
            key={r._id}
            className={`
            ${r.active ? "bg-[--gray]" : "bg-transparent"}
              h-[18px] w-[18px] cursor-default rounded-full border border-[--dark]
            `}
            onClick={() => onSetActiveHandler(r._id)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSlider;
