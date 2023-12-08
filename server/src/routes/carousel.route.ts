import { Router } from "express";
import multer from "multer";
import { addCarousel } from "../controllers/carousel.controller";

const router = Router();

const pathToImages = "server/src/public/img/carousel";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, pathToImages);
  },
  filename: (req, file, callback) => {
    callback(null, `slider${Date.now()}.${file.mimetype.substring(6)}`);
  },
});

const upload = multer({ storage });

router.get("/carousel");
router.post("/upload", upload.single("image"), addCarousel);

export { router as carouselRouter };
