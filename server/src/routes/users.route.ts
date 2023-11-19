import { Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

router.route("/").get(userController.getUsers);
router.route("/create").post(userController.createUser);
router.route("/login").post(userController.loginUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { router as userRouter };
