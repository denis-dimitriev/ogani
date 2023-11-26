import { Router } from "express";
import * as userController from "../controllers/users.controller";
import { verifyToken } from "../middlewares/verify-token.middleware";

const router = Router();

router.route("/all").get(userController.getUsers);
router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").get(userController.logoutUser);
router.route("/current").get(verifyToken, userController.getCurrentUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { router as userRouter };
