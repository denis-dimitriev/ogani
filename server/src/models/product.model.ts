import { Schema, model } from "mongoose";

export type ProductType = {
  name: string;
  category: Schema.Types.ObjectId;
  thumbnail: string;
  image: string;
  price: number;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  info: {
    description?: string;
    terms?: string;
    manufacturer?: string;
  };
  promo: {
    price: number;
    sale: number;
    start: string;
    end: string;
  };
  unit: "kg" | "pcs";
};

export const productSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  info: {
    description: String,
    terms: String,
    manufacturer: String,
    type: Object,
  },
  promo: {
    price: Number,
    sale: Number,
    start: String,
    end: String,
    type: Object,
  },
  unit: {
    type: String,
    required: true,
  },
});

export const Products = model("Product", productSchema);
