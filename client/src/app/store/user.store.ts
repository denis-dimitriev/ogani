import { makeAutoObservable, toJS } from "mobx";
import ApiService from "@app/service/api.service.ts";

type Role = "guest" | "customer" | "admin" | "operator";

interface GuestModel {
  username: string;
  role: string;
  cart: [];
  favorites?: [];
}

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

interface PersonalInfo {
  name: string;
  paymentCard?: {
    cardNumber: number;
    cardHolderName: string;
    expiryDate: string;
    SecurityCode: number;
  };
}

class UserStore {
  protected user: IUser = {
    username: "guest",
    role: "guest",
    cart: [],
    favorites: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.user = user;
  }

  getUser(): IUser {
    return toJS(this.user);
  }

  saveToLS() {
    localStorage.setItem(
      "ogani",
      JSON.stringify({
        user: {
          username: this.user.username,
          role: this.user.role,
          cart: this.user.cart,
          favorites: this.user.favorites,
        },
      }),
    );
  }

  getFromLS() {
    localStorage.getItem("ogani");
  }

  static async fetchUser() {
    return await ApiService.getCurrentUser();
  }
}

export default new UserStore();
