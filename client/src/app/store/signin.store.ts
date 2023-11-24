import { makeAutoObservable } from "mobx";
import { isEmpty } from "@shared/helpers/common.helper.ts";
import { MESSAGES } from "@shared/types/enums/messages.ts";
import {
  emailValidate,
  passwordValidate,
} from "@shared/helpers/auth.helper.ts";
import { LoginData } from "@shared/types/auth.types.ts";
import ApiService from "@app/service/api.service.ts";

interface FieldState {
  value: string;
  error: boolean;
  success: boolean;
  message: string;
}

class SignInStore {
  email: FieldState = {
    value: "",
    error: false,
    success: false,
    message: "",
  };

  password: FieldState = {
    value: "",
    error: false,
    success: false,
    message: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  onEmailInput(email: string) {
    if (!emailValidate(email)) {
      this.email.success = false;
      this.email.error = true;
      this.email.message = MESSAGES.INVALID_EMAIL;
    } else {
      this.email.error = false;
      this.email.message = "";
      this.email.success = true;

      this.email.value = email;
    }
  }

  onPasswordInput(password: string) {
    if (!passwordValidate(password)) {
      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.PASSWORD_INCORRECT;
    } else {
      this.password.success = true;
      this.password.error = false;
      this.password.message = "";

      this.password.value = password;
    }
  }

  resetAll() {
    this.email.value = "";
    this.email.error = false;
    this.email.success = false;
    this.email.message = "";

    this.password.value = "";
    this.password.error = false;
    this.password.success = false;
    this.password.message = "";
  }

  async onSubmit() {
    if (isEmpty(this.email.value) || isEmpty(this.password.value)) {
      this.email.success = false;
      this.email.error = true;
      this.email.message = MESSAGES.EMPTY_FIELD;
      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.EMPTY_FIELD;

      return;
    }

    if (this.email.success && this.password.success) {
      const userFields: LoginData = {
        email: this.email.value,
        password: this.password.value,
      };

      return await ApiService.loginUser(userFields);
    }
  }
}

export default new SignInStore();
