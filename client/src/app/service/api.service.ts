import axios from "axios";
import { API } from "@shared/types/enums/api.ts";
import { LoginData, RegisterData } from "@shared/types/auth.types.ts";

class ApiService {
  constructor() {}

  async loginUser(data: LoginData) {
    return await axios.post(API.USER_LOGIN, data);
  }

  async registerUser(data: RegisterData) {
    return await axios.post(API.USER_REGISTER, data);
  }
}

export default new ApiService();
