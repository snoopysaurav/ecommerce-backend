import { Router } from "express";
import fileMiddleware from "../middlewares/file.middleware";
import { getAllProduct, uploadProductImage } from "../controllers/product.controller";
import authMiddleware from "../middlewares/auth.middleware";

const productRoute: Router = Router();

productRoute.route("/product").get( authMiddleware,getAllProduct);

productRoute.route("/api/uploads").post(fileMiddleware, uploadProductImage);

export default productRoute;
