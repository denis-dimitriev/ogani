import { Router } from "express";
import * as bannerController from "../controllers/banner.controller";

const router = Router();

router.get("/", bannerController.getBanner);
router.post("/upload", bannerController.addBanner);

export { router as bannerRouter };
