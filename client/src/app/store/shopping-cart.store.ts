import { makeAutoObservable, toJS } from "mobx";
import { ProductType } from "@shared/types/product.types.ts";

export interface ShoppingCartItem extends ProductType {
  qty: number;
  totalPrice: number;
}

class ShoppingCartStore {
  private cart: ShoppingCartItem[] = [];

  totalSum = 0;
  protected maxLimitQty!: number;

  constructor() {
    makeAutoObservable(this);
  }

  getCart(): ShoppingCartItem[] {
    return toJS(this.cart);
  }

  addToCartFromView(product: ProductType, qty: number) {
    const existsProduct = this.cart.find((p) => p._id === product._id);

    if (existsProduct) {
      this.cart.forEach((p) => {
        if (p._id === existsProduct._id) {
          p.qty = qty;
          p.totalPrice = p.price * qty;
        }
      });
    } else {
      this.cart.push({
        ...product,
        qty,
        totalPrice: product.price * qty,
      });
    }

    this.onTotalSumCalc();
  }

  addToCartFromAction(product: ProductType) {
    const existsProduct = this.cart.find((p) => p._id === product._id);

    const unitQty = product.unit === "kg" ? 0.5 : 1;
    this.maxLimitQty = product.stock > 10 ? 10 : product.stock;

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

    this.onTotalSumCalc();
  }

  removeFromCart(product: ProductType) {
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

    this.onTotalSumCalc();
  }

  protected onTotalSumCalc() {
    this.totalSum = this.cart.reduce((acc, curr) => {
      return +acc.toFixed(2) + curr.totalPrice;
    }, 0);
  }
}

export default new ShoppingCartStore();
