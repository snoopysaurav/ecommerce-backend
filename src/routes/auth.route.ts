import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller";

const authRoute: Router = Router();

authRoute.route("/signup").post(signup);
authRoute.route("/signin").post(signin);

export default authRoute;
