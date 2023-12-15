import { Router } from "express";
import * as path from "path";
import multer from "multer";
import * as bannerController from "../controllers/banner.controller";

const router = Router();

const pathToStorage = "server/src/public/images/banner";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, pathToStorage);
  },
  filename: (req, file, callback) => {
    callback(null, `banner_${Date.now()}.${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.get("/", bannerController.getBanner);
router.post("/upload", upload.single("image"), bannerController.addBanner);

export { router as bannerRouter };
