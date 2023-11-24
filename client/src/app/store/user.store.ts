import { makeAutoObservable, toJS } from "mobx";

export interface IUserData {
  _id: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

class UserStore {
  private currentUser: null | IUserData = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUserData): void {
    this.currentUser = user;
  }

  getUser(): IUserData | null {
    return toJS(this.currentUser);
  }
}

export default new UserStore();
