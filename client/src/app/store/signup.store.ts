import { makeAutoObservable } from "mobx";
import { isEmpty } from "@shared/helpers/common.helper.ts";
import {
  emailValidate,
  passwordValidate,
  phoneValidate,
} from "@shared/helpers/auth.helper.ts";
import { MESSAGES } from "@shared/types/enums/messages.ts";
import { RegisterData } from "@shared/types/auth.types.ts";
import ApiService from "@app/service/api.service.ts";

interface FieldState {
  value: string;
  error: boolean;
  success: boolean;
  message: string;
}

class SignupStore {
  email: FieldState = {
    value: "",
    error: false,
    success: false,
    message: "",
  };

  phoneNumber: FieldState = {
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

  confirmPassword: FieldState = {
    value: "",
    error: false,
    success: false,
    message: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  onEmailInput(email: string) {
    if (isEmpty(email)) {
      this.email.success = false;
      this.email.error = true;
      this.email.message = MESSAGES.EMPTY_FIELD;
    } else if (email.length > 1 && !emailValidate(email)) {
      this.email.success = false;
      this.email.error = true;
      this.email.message = MESSAGES.INVALID_EMAIL;
    } else if (emailValidate(email)) {
      this.email.error = false;
      this.email.message = "";
      this.email.success = true;

      this.email.value = email;
    }
  }

  onPhoneNumberInput(phoneNumber: string) {
    if (isEmpty(phoneNumber)) {
      this.phoneNumber.success = false;
      this.phoneNumber.error = true;
      this.phoneNumber.message = MESSAGES.EMPTY_FIELD;
    } else if (!phoneValidate(phoneNumber)) {
      this.phoneNumber.success = false;
      this.phoneNumber.error = true;
      this.phoneNumber.message = MESSAGES.NON_EXIST_NUMBER;
    } else {
      this.phoneNumber.error = true;
      this.phoneNumber.message = "";
      this.phoneNumber.success = true;

      this.phoneNumber.value = phoneNumber;
    }
  }

  onPasswordInput(password: string) {
    if (isEmpty(password)) {
      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.EMPTY_FIELD;
    } else if (password.length > 1 && password.length < 6) {
      if (this.confirmPassword.value) {
        this.confirmPassword.success = false;
        this.confirmPassword.error = true;
        this.confirmPassword.message = MESSAGES.PASSWORD_MISMATCH;
      }

      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.PASSWORD_SHORT;
    } else if (!passwordValidate(password)) {
      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.PASSWORD_INCORRECT;
    } else {
      if (this.confirmPassword.value) {
        this.confirmPassword.success = true;
        this.confirmPassword.error = false;
        this.confirmPassword.message = "";
      }

      this.password.success = true;
      this.password.error = false;
      this.password.message = "";

      this.password.value = password;
    }
  }

  onConfirmPasswordInput(confirmPassword: string) {
    if (isEmpty(confirmPassword)) {
      this.confirmPassword.success = false;
      this.confirmPassword.error = true;
      this.confirmPassword.message = MESSAGES.EMPTY_FIELD;
    } else if (confirmPassword !== this.password.value) {
      this.confirmPassword.success = false;
      this.confirmPassword.error = true;
      this.confirmPassword.message = MESSAGES.PASSWORD_MISMATCH;
    } else {
      this.confirmPassword.success = true;
      this.confirmPassword.error = false;
      this.confirmPassword.message = "";

      this.confirmPassword.value = confirmPassword;
    }
  }

  resetAll() {
    this.email.value = "";
    this.email.error = false;
    this.email.success = false;
    this.email.message = "";

    this.phoneNumber.value = "";
    this.phoneNumber.error = false;
    this.phoneNumber.success = false;
    this.phoneNumber.message = "";

    this.password.value = "";
    this.password.error = false;
    this.password.success = false;
    this.password.message = "";

    this.confirmPassword.value = "";
    this.confirmPassword.error = false;
    this.confirmPassword.success = false;
    this.confirmPassword.message = "";
  }

  async onSubmit() {
    if (
      isEmpty(this.email.value) ||
      isEmpty(this.password.value) ||
      isEmpty(this.phoneNumber.value) ||
      isEmpty(this.confirmPassword.value)
    ) {
      this.email.success = false;
      this.email.error = true;
      this.email.message = MESSAGES.EMPTY_FIELD;
      this.password.success = false;
      this.password.error = true;
      this.password.message = MESSAGES.EMPTY_FIELD;
      this.phoneNumber.success = false;
      this.phoneNumber.error = true;
      this.phoneNumber.message = MESSAGES.EMPTY_FIELD;
      this.confirmPassword.success = false;
      this.confirmPassword.error = true;
      this.confirmPassword.message = MESSAGES.EMPTY_FIELD;

      return;
    }

    if (
      this.email.success &&
      this.phoneNumber.success &&
      this.password.success &&
      this.confirmPassword.success
    ) {
      const newUser: RegisterData = {
        email: this.email.value,
        password: this.password.value,
        phoneNumber: this.phoneNumber.value,
        confirmPassword: this.confirmPassword.value,
      };

      return await ApiService.registerUser(newUser);
    }
  }
}

export default new SignupStore();
