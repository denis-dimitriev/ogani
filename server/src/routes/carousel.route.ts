import { Router } from "express";
import * as carouselController from "../controllers/carousel.controller";

const router = Router();

router.get("/", carouselController.getCarousel);
router.post("/upload", carouselController.addCarousel);

export { router as carouselRouter };
