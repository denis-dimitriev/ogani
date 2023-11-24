import axios from "axios";
import { API } from "@shared/types/enums/api.ts";
import { LoginData, RegisterData } from "@shared/types/auth.types.ts";

class ApiService {
  constructor() {}

  static async logoutUser() {
    return await axios.post(API.USER_LOGOUT);
  }

  static async loginUser(data: LoginData) {
    return await axios.post(API.USER_LOGIN, data);
  }

  static async registerUser(data: RegisterData) {
    return await axios.post(API.USER_REGISTER, data);
  }
}

export default ApiService;
