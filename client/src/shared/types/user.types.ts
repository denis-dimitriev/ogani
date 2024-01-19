import { ShoppingCartItem } from "@app/store/shopping-cart.store.ts";

interface GuestModel {
  username: string;
  role: Role;
  cart: ShoppingCartItem[];
  favorites?: string[];
}
interface PersonalInfo {
  name: string;
  paymentCard?: {
    cardNumber: number;
    cardHolderName: string;
    expiryDate: string;
    SecurityCode: number;
  };
}

export type Role = "guest" | "customer" | "admin" | "operator";

export interface IUser extends GuestModel {
  _id?: string;
  email?: string;
  phoneNumber?: string;
  role: Role;
  personalInfo?: PersonalInfo;
  cart: ShoppingCartItem[];
  orders?: [];
  favorites?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
