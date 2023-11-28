interface GuestModel {
  username: string;
  role: Role;
  cart: [];
  favorites?: [];
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
  cart: [];
  orders?: [];
  favorites?: [];
  createdAt?: Date;
  updatedAt?: Date;
}
