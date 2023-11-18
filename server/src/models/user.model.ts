import { Schema, model } from "mongoose";

interface User {
  email: string;
  password: string;
  confirmedPassword: string;
  phoneNumber: string;
}

const schema = new Schema<User>({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  confirmedPassword: {
    type: String,
    required: [true, "Confirm password is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
  },
});

export const User = model("User", schema);
