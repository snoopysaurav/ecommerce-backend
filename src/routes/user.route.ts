import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "../controllers/user.controller";

const userRoute: Router = Router();

userRoute.route("/user").get(getAllUsers);
userRoute.route("/user/:id").get(getSingleUser).delete(deleteUser);

export default userRoute;
