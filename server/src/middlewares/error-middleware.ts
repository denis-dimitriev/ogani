import { NextFunction, Request, Response } from "express";
import AppError from "../helpers/appError";
import { STATUS_CODE } from "../types/enums/status-code";
import { Status } from "../types/common";

export function notFound(req: Request, res: Response, next: NextFunction) {
  next(new AppError(`Not found - ${req.originalUrl}`, STATUS_CODE.NOT_FOUND));
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errStatus = err.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;
  const status: Status = `${err.statusCode}`.startsWith("4")
    ? "failed"
    : `${err.statusCode}`.startsWith("2")
    ? "success"
    : "error";
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    status,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
}
