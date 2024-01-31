import { NextFunction, Request, Response } from "express";
import { Products, ProductType } from "../models/product.model";
import { Categories } from "../models/category.model";
import { asyncHandler } from "../helpers/async-handler";
import AppError from "../helpers/appError";
import { STATUS_CODE } from "../types/enums/status-code";
import { MESSAGES } from "../types/enums/messages";

export const createProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      name,
      category,
      thumbnail,
      sketch,
      images,
      info,
      price,
      promo,
      unit,
      rating,
      stock,
    } = req.body as ProductType;

    const foundCategory = await Categories.findOne({ name: category });

    const newProduct = await Products.create({
      name,
      category: foundCategory,
      thumbnail,
      sketch,
      images,
      info,
      price,
      promo,
      unit,
      rating,
      stock,
    });

    if (newProduct) {
      return res.status(STATUS_CODE.SUCCESS_OK).json({
        status: STATUS_CODE.SUCCESS_OK,
        message: MESSAGES.SUCCESSFULLY_CREATED,
        data: newProduct,
      });
    } else {
      return next(
        new AppError(
          MESSAGES.SOMETHING_WENT_WRONG,
          STATUS_CODE.INTERNAL_SERVER_ERROR,
        ),
      );
    }
  },
);

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.find().populate("category").select("-__v");
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get products",
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    const product = await Products.findById(_id).populate("category").exec();

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get products",
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const products = await Products.find();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get products",
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const products = await Products.find();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Cannot get products",
    });
  }
};
