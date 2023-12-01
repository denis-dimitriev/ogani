import { asyncHandler } from "../helpers/async-handler";
import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../types/enums/status-code";

export const getCarousel = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(STATUS_CODE.SUCCESS_OK).json({
    data: "",
  });
});
