import { Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

router.route("/").get(userController.getUsers).post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { router as userRouter };
