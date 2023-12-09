import { Router } from "express";
import * as path from "path";
import multer from "multer";
import * as carouselController from "../controllers/carousel.controller";

const router = Router();

const pathToStorage = "server/src/public/images";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, pathToStorage);
  },
  filename: (req, file, callback) => {
    callback(null, `slider_${Date.now()}.${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.get("/", carouselController.getCarousel);
router.post("/upload", upload.single("image"), carouselController.addCarousel);

export { router as carouselRouter };
