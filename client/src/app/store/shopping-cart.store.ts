import { makeAutoObservable, toJS } from "mobx";
import { IProduct } from "@shared/types/product.types.ts";

export interface ShoppingCartItem extends IProduct {
  qty: number;
  totalPrice: number;
}

class ShoppingCartStore {
  private cart: ShoppingCartItem[] = [];

  totalSum = 0;
  readonly maxLimitQty = 10; // 10kg or 10pcs

  constructor() {
    makeAutoObservable(this);
  }

  getCart(): ShoppingCartItem[] {
    return toJS(this.cart);
  }

  addToCart(product: IProduct) {
    const existsProduct = this.cart.find((p) => p._id === product._id);

    const unitQty = product.unit === "kg" ? 0.5 : 1;

    if (existsProduct) {
      this.cart.forEach((p) => {
        if (p._id === existsProduct._id) {
          if (p.qty === this.maxLimitQty) {
            p.qty = this.maxLimitQty;
            return;
          }
          p.qty = p.qty + unitQty;

          p.totalPrice = p.totalPrice + p.price * unitQty;
        }
      });
    } else {
      this.cart.push({
        ...product,
        qty: unitQty,
        totalPrice: product.price * unitQty,
      });
    }

    this.totalSum = this.cart.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);
  }

  removeFromCart(product: IProduct) {
    const unitQty = product.unit === "kg" ? 0.5 : 1;

    this.cart.forEach((p) => {
      if (p._id === product._id) {
        if (p.qty === 0) {
          p.qty = 0;
          return;
        }
        p.qty = p.qty - unitQty;

        p.totalPrice = p.totalPrice - p.price * unitQty;
      }
    });

    if (this.cart.find((p) => p.qty === 0)) {
      this.cart = this.cart.filter((p) => p.qty !== 0);
    }

    this.totalSum = this.cart.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);
  }
}

export default new ShoppingCartStore();
