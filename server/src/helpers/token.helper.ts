import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import config from "config";
import { Role } from "../models/user.model";

const jwt_secret = config.get("jwt.secret") as string;

export function generateToken(_id: ObjectId, role: Role) {
  return jwt.sign({ _id, role }, jwt_secret, {
    expiresIn: "30d",
  });
}
