import { Router } from "express";
import * as categoryController from "../controllers/category.controller";

const router = Router();

router.route("/").get(categoryController.getCategories);

router.route("/create").post(categoryController.createCategories);

router
  .route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategories)
  .delete(categoryController.deleteCategories);

export { router as categoriesRouter };
