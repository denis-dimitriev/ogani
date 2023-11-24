import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import AppError from "../helpers/appError";
import { Status } from "../types/common";
import { asyncHandler } from "../helpers/async-handler";
import { MESSAGES } from "../types/enums/messages";
import { STATUS_CODE } from "../types/enums/status-code";
import { Document } from "mongoose";
import bcrypt from "bcrypt";
import { generateToken } from "../helpers/token.helper";
import { EXPIRY_TIME } from "../types/enums/expiry-time";

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export interface ResBody {
  status: Status;
  message?: string;
  stack?: any;
  data?: Document;
}

export const getUsers = async () => {};
export const getUser = async () => {};

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    res.status(STATUS_CODE.SUCCESS_OK).json({
      status: "success",
      message: MESSAGES.RESOURCE_HAS_FOUND,
      data: user,
    } as ResBody);
  },
);

export const updateUser = async () => {};

export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunctin): Promise<Response> => {
    const { email, password, phoneNumber, confirmPassword } =
      req.body as RegisterData;

    if (!email)
      return next(
        new AppError("Email is required", STATUS_CODE.UNAUTHORIZED_ERRO),
      ) as never;
    else if (!phoneNumber)
      return next(
        new AppError("Phone number is required", STATUS_CODE.UNAUTHORIZED_ERRR),
      ) as never;
    else if (!password)
      return next(
        new AppError(
          "Password number is required",
          STATUS_CODE.UNAUTHORIZED_ERRR,
        ),
      ) as never;
    else if (!confirmPassword)
      return next(
        new AppError(
          "ConfirmPassword number is required",
          STATUS_CODE.UNAUTHORIZED_ERRR,
        ),
      ) as never;

    if (password !== confirmPassword) {
      return next(
        new AppError(
          MESSAGES.PASSWORD_MISMATCH,
          STATUS_CODE.UNAUTHORIZED_ERROR,
        ),
      ) as never;
    }

    if await Userexists({ email })) {
      return next(
        new AppError(
          MESSAGES.EMAIL_ALREADY_EXIST,
          STATUS_CODE.UNAUTHORIZED_ERROR,
        ),
      ) as never;
    }

    if await Userexists({ phoneNumber })) {
      return next(
        new AppError(
          MESSAGES.PHONE_NUMBER_ALREADY_EXIST,
          STATUS_CODE.UNAUTHORIZED_ERROR,
        ),
      ) as never;
    }

    cont newUser  await User.create({
      email,
      password,
      phoneNumber,
      confirmPassword,
    });

    if (newUser) {
      const tokn = generateToken(newUser._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        //secure: true /* true for https  */
        sameSite: "strict",
        maxAge: EXPIRY_TIME.DAY * 30
      });

      return res.status(STATUS_CODE.CREATED).json({
        status: "success",
        message: MESSAGES.USER_SUCCESS_CREATED
      } as ResBody);
    } else {
      return next(
        new AppError(
          MESSAGES.SOMETHING_WENT_WRONG,
          STATUS_CODE.INTERNAL_SERVER_ERROR
        )
      ) as never;
    }
  },
);

export const loginUser = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { email, password } = req.body as LoginData;
    let token = req.cookies["jwt"];

    const user = await User.findOne({ email });

    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);

      if (comparePassword) {
        if (!token) {
          token = generateToken(user._id);

          res.cookie("jwt", token, {
            httpOnly: true,
            //secure: true /* true for https  */
            sameSite: "strict",
            maxAge: EXPIRY_TIME.DAY * 30
          });
        }

        return res.status(STATUS_CODE.SUCCESS_OK).json({
          status: "success",
          message: MESSAGES.USER_SUCCESS_SIGN,
          data: user
        } as ResBody);
      } else {
        return next(new AppError(MESSAGES.PASSWORD_INCORRECT, 401)) as never;
      }
    } else {
      return next(new AppError(MESSAGES.EMAIL_NOT_EXIST, 404)) as never;
    }
  },
);

export const logoutUser = asyncHandler(async function(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(EXPIRY_TIME.END_OF_SESSION)
  });

  return res.status(STATUS_CODE.SUCCESS_OK).json({
    status: "success",
    message: "User logged out"
  } as ResBody);
});

export const deleteUser = async () => {};
