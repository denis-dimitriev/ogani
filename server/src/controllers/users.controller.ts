import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

export const getUsers = async () => {};

export const getUser = async () => {};

export const updateUser = async () => {};

export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    res.status(200).json({
      status: "pizdos",
      data: req.body,
    });

    console.log(user);
  },
);

export const deleteUser = async () => {};
