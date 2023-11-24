import { makeAutoObservable, toJS } from "mobx";
import ApiService from "@app/service/api.service.ts";

export interface IUserData {
  _id: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

type LStorage = {
  hasSignedIn: boolean;
  hasLoggedOut: boolean;
};

class UserStore {
  private currentUser: null | IUserData = null;
  protected hasSignedIn = true;
  protected hasLoggedOut = false;

  constructor() {
    makeAutoObservable(this);
    const state = JSON.parse(localStorage.getItem("user")!) as LStorage;

    this.hasSignedIn = state.hasSignedIn;
    this.hasLoggedOut = state.hasLoggedOut;

    if (this.hasSignedIn && !this.hasLoggedOut) {
      UserStore.fetchUser()
        .then((res) => {
          if (res.data) {
            this.setUser(res.data.user);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  setUser(user: IUserData): void {
    this.currentUser = user;
  }

  getUser(): IUserData | null {
    return toJS(this.currentUser);
  }

  setHasSignedIn() {
    this.hasSignedIn = true;
    this.hasLoggedOut = false;

    localStorage.setItem(
      "user",
      JSON.stringify({
        hasSignedIn: this.hasSignedIn,
        hasLoggedOut: this.hasLoggedOut,
      }),
    );
  }

  setHasLoggedOut() {
    this.hasSignedIn = false;
    this.hasLoggedOut = true;

    localStorage.setItem(
      "user",
      JSON.stringify({
        hasSignedIn: this.hasSignedIn,
        hasLoggedOut: this.hasLoggedOut,
      }),
    );
  }

  protected static async fetchUser() {
    return await ApiService.getCurrentUser();
  }
}

export default new UserStore();
