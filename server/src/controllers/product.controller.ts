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
      subCategory,
      type,
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

    const foundCategory = await Categories.findOne({
      name: category,
    }).collation({ locale: "en_US", strength: 1 });

    const newProduct = await Products.create({
      name,
      category: foundCategory,
      subCategory,
      type,
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

export const getProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Products.find().populate("category").select("-__v");

    if (products) {
      return res.status(STATUS_CODE.SUCCESS_OK).json({
        status: STATUS_CODE.SUCCESS_OK,
        message: MESSAGES.RESOURCE_HAS_FOUND,
        length: products.length,
        products: products,
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

export const getProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const _id = req.params.id;

    const product = await Products.findById(_id).populate("category").exec();

    if (product) {
      return res.status(STATUS_CODE.SUCCESS_OK).json({
        status: "Ok",
        message: "Success",
        product,
      });
    } else {
      return next(new AppError(MESSAGES.NOT_FOUND, STATUS_CODE.NOT_FOUND));
    }
  },
);

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

export const getProductsByCategory = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const category = req.params.category as string;

    const foundCategory = await Categories.findOne({
      name: category,
    }).collation({ locale: "en_US", strength: 1 });

    if (foundCategory) {
      const products = await Products.find({
        $or: [{ category: foundCategory }],
      }).populate("category");

      if (products) {
        return res.status(STATUS_CODE.SUCCESS_OK).json({
          status: STATUS_CODE.SUCCESS_OK,
          message: MESSAGES.RESOURCE_HAS_FOUND,
          length: products.length,
          products,
        });
      } else {
        return next(
          new AppError(
            MESSAGES.SOMETHING_WENT_WRONG,
            STATUS_CODE.INTERNAL_SERVER_ERROR,
          ),
        );
      }
    } else {
      return next(new AppError("Category didnt exists", STATUS_CODE.NOT_FOUND));
    }
  },
);
