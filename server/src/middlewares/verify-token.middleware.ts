import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";
import AppError from "../helpers/appError";
import { STATUS_CODE } from "../types/enums/status-code";
import { MESSAGES } from "../types/enums/messages";
import { User } from "../models/user.model";
import { EXPIRY_TIME } from "../types/enums/expiry-time";

const jwt_secret = config.get("jwt.secret") as string;

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies["jwt"];

  if (token) {
    try {
      const decoded = jwt.verify(token, jwt_secret) as JwtPayload;

      const user = await User.findById({ _id: decoded._id })
        .select("-password")
        .select("-__v");

      if (user) {
        req.body = user;
        next();
      } else {
        return next(new AppError(MESSAGES.NOT_FOUND, STATUS_CODE.NOT_FOUND));
      }
    } catch (e) {
      return next(
        new AppError(MESSAGES.INVALID_TOKEN, STATUS_CODE.INVALID_TOKEN),
      );
    }
  } else {
    return next(
      new AppError(
        MESSAGES.AUTHENTICATION_REQUIRED,
        STATUS_CODE.UNAUTHORIZED_ERROR,
      ),
    );
  }
}
