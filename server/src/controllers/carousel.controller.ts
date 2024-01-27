import { asyncHandler } from "../helpers/async-handler";
import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../types/enums/status-code";
import { Carousel } from "../models/carousel.model";
import AppError from "../helpers/appError";
import { ImageFile } from "../types/common";

//  https://ucarecdn.com/:uuid/

import { uploadFile } from "@uploadcare/upload-client";

export const getCarousel = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const carousel = await Carousel.find().select("-__v");

  if (carousel) {
    return res.status(STATUS_CODE.SUCCESS_OK).json({
      status: "success",
      carousel,
    });
  } else {
    return next(new AppError("Not found", STATUS_CODE.NOT_FOUND));
  }
});

export const addCarousel = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { title, link } = req.body;
  const { filename } = req.file as ImageFile;

  const slide = await Carousel.create({
    title,
    link,
    image: {
      name: filename,
      path: `http://localhost:8000/api/images/carousel/${filename}`,
    },
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
