import { NextFunction, Request, Response } from "express";
import { Products, ProductType } from "../models/product.model";
import { Categories } from "../models/category.model";
import { asyncHandler } from "../helpers/async-handler";
import AppError from "../helpers/appError";
import { STATUS_CODE } from "../types/enums/status-code";

export const createProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, category, thumbnail, image, info, price, unit, promo } =
      req.body as ProductType;

    const categoryExists = await Categories.find({ name: category });

    if (!categoryExists) {
      const newCategory = await Categories.create({ name: category });

      const product = await Products.create({
        name,
        category: newCategory,
        thumbnail,
        image,
        info,
        price,
        unit,
        promo,
      });

      if (product) {
        return res.status(200).json({
          status: "Success",
          data: product,
        });
      } else {
        return next(
          new AppError(
            "Something went wrong",
            STATUS_CODE.INTERNAL_SERVER_ERROR,
          ),
        );
      }
    } else {
      const product = await Products.create({
        name,
        category: categoryExists,
        thumbnail,
        image,
        info,
        price,
        unit,
        promo,
      });

      if (product) {
        return res.status(200).json({
          status: "Success",
          data: product,
        });
      } else {
        return next(
          new AppError(
            "Something went wrong",
            STATUS_CODE.INTERNAL_SERVER_ERROR,
          ),
        );
      }
    }
  },
);

export const getProducts = async (req: Request, res: Response) => {
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

export const getProduct = async (req: Request, res: Response) => {
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
export const updateProduct = async (req: Request, res: Response) => {
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
