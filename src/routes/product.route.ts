import { Router } from "express";
import fileMiddleware from "../middlewares/file.middleware";

const productRoute: Router = Router();

productRoute.route("/api/uploads").post(fileMiddleware);

export default productRoute;
