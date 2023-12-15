import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Banner = model("Banner", schema);
