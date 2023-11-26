import { makeAutoObservable, toJS } from "mobx";
import ApiService from "@app/service/api.service.ts";

type Role = "guest" | "customer" | "admin" | "operator";

interface GuestModel {
  username: string;
  role: Role;
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

interface Ogani<T> {
  user: T;
}

const guest: IUser = {
  username: "guest",
  role: "guest",
  cart: [],
  favorites: [],
};

class UserStore {
  protected user: IUser = guest;

  constructor() {
    makeAutoObservable(this);

    const ogani = this.getUserFromLS();

    if (ogani && ogani.user.role === "customer") {
      UserStore.fetchUser()
        .then((res) => {
          if (res.data) {
            this.setUser(res.data.user);
          }
        })
        .catch((e) => console.log(e));
    }
  }

  setUser(user: IUser) {
    this.user = user;
  }

  getUser(): IUser {
    return toJS(this.user);
  }

  saveUserToLS() {
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

  getUserFromLS() {
    const storage: string | null = localStorage.getItem("ogani");

    if (storage) {
      return JSON.parse(storage) as Ogani<IUser>;
    }

    return null;
  }

  setDefaultUserLS() {
    localStorage.setItem(
      "ogani",
      JSON.stringify({
        user: guest,
      }),
    );
  }

  static async fetchUser() {
    return await ApiService.getCurrentUser();
  }
}

export default new UserStore();
