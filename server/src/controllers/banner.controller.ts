import { asyncHandler } from "../helpers/async-handler";
import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../types/enums/status-code";
import AppError from "../helpers/appError";
import { Banner } from "../models/banner.model";
import { Categories } from "../models/category.model";

export const getBanner = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const banner = await Banner.find().select("-__v");

  if (banner) {
    return res.status(STATUS_CODE.SUCCESS_OK).json({
      status: "success",
      message: `Found ${banner.length + 1} items`,
      banner,
    });
  } else {
    return next(new AppError("Not found", STATUS_CODE.NOT_FOUND));
  }
});

export const addBanner = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { title, link, category } = req.body;

  const categoryParent = await Categories.findOne({ name: category });

  if (category) {
    const item = await Banner.create({
      title,
      link,
      category: categoryParent,
    });

    if (item) {
      return res.status(STATUS_CODE.SUCCESS_OK).json({
        status: "success",
        message: "New item created successfully",
      });
    } else {
      return next(
        new AppError("Something went wrong", STATUS_CODE.INTERNAL_SERVER_ERROR),
      );
    }
  }
});
