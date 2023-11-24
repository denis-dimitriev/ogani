import { makeAutoObservable } from "mobx";

class AlertStore {
  open!: boolean;

  constructor() {
    makeAutoObservable(this);
  }

  setOpen() {
    this.open = true;
  }

  setClose() {
    this.open = false;
  }
}

export default new AlertStore();
