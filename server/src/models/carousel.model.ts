import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
      name: String,
      path: String,
    },
  },
  { timestamps: true },
);

export const Carousel = model("Carousel", schema);
