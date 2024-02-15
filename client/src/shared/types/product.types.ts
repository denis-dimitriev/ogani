import { Rating } from "@shared/types/enums/product.types.ts";

export type Unit = "kg" | "pcs";

type Translation = {
  ru: string;
  ro: string;
};

type CategoryType = {
  _id: string;
  name: string;
};

type Info = {
  description: Translation;
  terms: Translation;
  manufacturer: Translation;
};

type Promo = {
  has?: boolean;
  oldPrice?: number;
  price: number;
  sale: number;
  start: string;
  end: string;
};

export type ProductType = {
  _id: string;
  name: Translation;
  category: CategoryType;
  subCategory?: string;
  type?: string;
  thumbnail: string;
  sketch: string;
  images: string[];
  price: number;
  rating: Rating;
  info: Info;
  unit: Unit;
  stock: number;
  promo?: Promo;
  createdAt: string;
  updatedAt: string;
};
