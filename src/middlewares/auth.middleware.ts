import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDatasource } from "../database/datasource";
import UserEntity from "../database/user.entity";

const UserRepository = AppDatasource.getRepository(UserEntity);

interface UserRequest extends Request {
  user: any;
}
const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ msg: `Unauthenticated` });
  }
  const { id, email }: any = jwt.decode(token);
  const user = await UserRepository.findOne({
    where: {
      id: id,
      email: email,
    },
  });
  req.user = user;
  next();
};

export default authMiddleware;
