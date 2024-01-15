import { makeAutoObservable } from "mobx";
import { IShoppingCart } from "@shared/types/shopping-cart.types.ts";

class ShoppingCartStore {
  cart: IShoppingCart[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart() {}
}

export default new ShoppingCartStore();
