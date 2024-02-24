import axios from "axios";
import { API } from "@shared/types/enums/api.ts";
import { LoginData, RegisterData } from "@shared/types/auth.types.ts";

axios.defaults.baseURL = "/";

class ApiService {
  constructor() {}

  static async logoutUser() {
    return await axios.get(API.USER_LOGOUT);
  }

  static async getCurrentUser() {
    return await axios.get(API.USER_GET_CURRENT);
  }

  static async loginUser(data: LoginData) {
    return await axios.post(API.USER_LOGIN, data);
  }

  static async registerUser(data: RegisterData) {
    return await axios.post(API.USER_REGISTER, data);
  }

  static async getMainCarousel() {
    return await axios.get(API.MAIN_CAROUSEL_GET);
  }

  static async getBanner() {
    return await axios.get(API.BANNER_GET);
  }

  static async getProducts() {
    return await axios.get(API.PRODUCTS_GET);
  }

  static async getProductsByCategory(category: string) {
    return await axios.get(API.PRODUCTS_BY_CATEGORY_GET.concat(category));
  }

  static async getSingleProduct(id: string) {
    return await axios.get(API.PRODUCT_GET.concat(id));
  }
}

export default ApiService;
