import { model, Schema, Types } from "mongoose";
import { Categories } from "./category.model";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      ref: 'Category',
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Banner = model("Banner", schema);
