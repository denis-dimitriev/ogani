import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import config from "config";

const jwt_secret = config.get("jwt.secret") as string;

export function generateToken(_id: ObjectId) {
  return jwt.sign({ _id }, jwt_secret, {
    expiresIn: "30d",
  });
}
