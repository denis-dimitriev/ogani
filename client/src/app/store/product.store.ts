import { makeAutoObservable } from "mobx";
import { ProductType } from "@shared/types/product.types.ts";

class ProductStore {
  private products: ProductType[] = [];
  private productsByCategory: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async onFetchProducts() {}
}
