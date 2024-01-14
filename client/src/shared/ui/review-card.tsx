import { Fragment } from "react";

interface Props {
  review: {
    _id: string;
    image: string;
    text: string;
    username: string;
  };
}

function ReviewCard({ review: { text, username, image } }: Props) {
  return (
    <article>
      <figure className="flex w-full flex-col items-center justify-center gap-4">
        <div className="rounded-full">
          <img src={image} alt="" />
        </div>
        <Fragment>
          <img
            src="https://htmldemo.net/safira/safira/assets/img/about/testimonials-icon.png"
            alt=""
          />
        </Fragment>
        <figcaption className="p-2 text-[14px]">
          <p className="mt-3 text-center tracking-wide">{text}</p>
          <p className="mt-2 text-center font-bold tracking-wide">{username}</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default ReviewCard;
