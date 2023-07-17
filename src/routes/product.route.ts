import { Router } from "express";
import multer from "multer";
import { createProduct, getAllProduct } from "../controllers/product.controller";
import authMiddleware from "../middlewares/auth.middleware";

const productRoute: Router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "/uploads");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `${Date.now()}.${ext}`);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else { 
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
    fileFilter: fileFilter,
  });

productRoute.route("/product").get( authMiddleware,getAllProduct).post(authMiddleware, upload.single('file'), createProduct);

export default productRoute;
