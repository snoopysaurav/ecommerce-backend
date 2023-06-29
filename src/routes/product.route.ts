import { Router } from "express";
import fileMiddleware from "../middlewares/file.middleware";
import { uploadProductImage } from "../controllers/product.controller";

const productRoute: Router = Router();

productRoute.route("/api/uploads").post(fileMiddleware, uploadProductImage);

export default productRoute;
