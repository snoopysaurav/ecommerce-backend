import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/user.controller";

const userRoute: Router = Router();

userRoute.route("/user").get(getAllUsers);
userRoute
  .route("/user/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

export default userRoute;
