import { asyncHandler } from "../helpers/async-handler";
import { Response, Request, NextFunction } from "express";
import { Categories } from "../models/category.model";

export const createCategories = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const getCategories = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const categories = await Categories.find();
  },
);

export const getCategory = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const updateCategories = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const deleteCategories = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);
