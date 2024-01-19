import { makeAutoObservable, toJS } from "mobx";
import ApiService from "@app/service/api.service.ts";
import { IUser } from "@shared/types/user.types.ts";
import { Ogani } from "@shared/types/common.types.ts";

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

    if (ogani !== null) {
      if (ogani.user) {
        if (ogani.user.role !== "guest") {
          UserStore.fetchUser()
            .then((res) => {
              if (res.data) {
                this.setUser(res.data.user);
                this.saveUserToLS();
              }
            })
            .catch((e) => console.log(e));
        }
      } else {
        this.setDefaultUserLS();
      }
    }
  }

  setUser(user: IUser) {
    this.user = user;
  }

  getUser(): IUser {
    return toJS(this.user);
  }

  saveUserToLS() {
    const ogani = this.getUserFromLS();

    if (ogani !== null) {
      localStorage.setItem(
        "ogani",
        JSON.stringify({
          ...ogani,
          user: {
            username: this.user.username,
            role: this.user.role,
            cart: this.user.cart,
            favorites: this.user.favorites,
          },
        }),
      );
    } else {
      return;
    }
  }

  getUserFromLS() {
    const storage: string | null = localStorage.getItem("ogani");

    if (storage) {
      return JSON.parse(storage) as Ogani<IUser>;
    }

    return null;
  }

  setDefaultUserLS() {
    const ogani = this.getUserFromLS();

    if (ogani !== null) {
      localStorage.setItem(
        "ogani",
        JSON.stringify({
          ...ogani,
          user: guest,
        }),
      );
    } else {
      return;
    }
  }

  static async fetchUser() {
    return await ApiService.getCurrentUser();
  }

  addToFavorites(_id: string) {
    this.user.favorites?.push(_id);
  }
}

export default new UserStore();
