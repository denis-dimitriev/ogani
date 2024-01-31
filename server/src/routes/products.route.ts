import { Router } from "express";
import * as productController from "../controllers/product.controller";

const router = Router();

router.route("/").get(productController.getProducts);

router.route("/create").post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

export { router as productsRouter };
