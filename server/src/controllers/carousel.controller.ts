import { asyncHandler } from "../helpers/async-handler";
import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../types/enums/status-code";
import { Carousel } from "../models/carousel.model";
import AppError from "../helpers/appError";
import { ImageFile } from "../types/common";

export const getCarousel = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {});

export const addCarousel = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { title, link } = req.body;
  const { filename, path } = req.file as ImageFile;

  const slide = await Carousel.create({
    title,
    link,
    image: { name: filename, path },
  });

  if (slide) {
    return res.status(STATUS_CODE.SUCCESS_OK).json({
      status: "success",
      message: "New slide created successfully",
    });
  } else {
    return next(
      new AppError("Something went wrong", STATUS_CODE.INTERNAL_SERVER_ERROR),
    );
  }
});
