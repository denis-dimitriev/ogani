import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;
  phoneNumber: string;
}

const schema = new Schema<User>(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = model("User", schema);
