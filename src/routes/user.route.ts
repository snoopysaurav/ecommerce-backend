import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

const userRoute: Router = Router();

userRoute.route("/user").get(authMiddleware, getAllUsers);
userRoute
  .route("/user/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

export default userRoute;
