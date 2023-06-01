import { Request, Response } from "express";
import { AppDatasource } from "../database/datasource";
import UserEntity from "../database/user.entity";

const UserRepository = AppDatasource.getRepository(UserEntity);

const getAllUsers = (req: Request, res: Response) => {
  try {
    const user = UserRepository.find();
    if (!user) {
      return res.status(400).json({ msg: `No users to display` });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.params;
    const user = await UserRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(400).json({ msg: `No user with id:${id}` });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.params;
    const user = await UserRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(400).json({ msg: `No user with id:${id}` });
    }
    await UserRepository.delete(user);
    return res.status(200).json({ msg: `Deleted`, user });
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

export { getAllUsers, getSingleUser, deleteUser };
