import { Schema, model } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: "",
  },
});

export const Carousel = model("Carousel", schema);
