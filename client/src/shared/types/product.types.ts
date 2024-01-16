import { Rating } from "@shared/types/enums/product.types.ts";

export type Unit = "kg" | "pcs";

export interface IProduct {
  _id: string;
  title: string;
  thumbnail: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: Rating;
  promoPrice: number;
  sale: number;
  unit: Unit;
}
