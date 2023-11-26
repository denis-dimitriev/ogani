import { Schema, model, ObjectId } from "mongoose";
import bcrypt from "bcrypt";

type Role = "guest" | "customer" | "admin" | "operator";

interface UserModel {
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  role: Role;
  personalInfo: PersonalInfo;
  cart: [];
  orders: [];
  favorites: [];
  createdAt: Date;
  updatedAt: Date;
}

interface PersonalInfo {
  name: string;
  paymentCard: {
    cardNumber: number;
    cardHolderName: string;
    expiryDate: string;
    SecurityCode: number;
  };
}

const userSchema = new Schema<UserModel>(
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
      minlength: 6,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin", "operator"],
      default: "customer",
    },
    username: String,
    personalInfo: {
      name: {
        type: String,
        maxlength: 100,
      },
      paymentCard: {
        cardNumber: Number,
        cardHolderName: String,
        expiryDate: String,
        SecurityCode: Number,
      },
    },
    cart: [],
    orders: [],
    favorites: [],
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  this.username = this.email
    .substring(0, this.email.indexOf("@"))
    .concat(`-${this._id}`.substring(0, 4));
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = model("User", userSchema, "users");
