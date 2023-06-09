import { Request, Response } from "express";
import { AppDatasource } from "../database/datasource";
import UserEntity from "../database/user.entity";
import { updateUserValidation } from "../validations/user.validation";
import bcrypt from "bcrypt";

const UserRepository = AppDatasource.getRepository(UserEntity);

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserRepository.find();
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = updateUserValidation.validate(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    const { firstname, lastname, password } = value;
    const { id }: any = req.params;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await UserRepository.findOneBy({
      id: id,
    });
    user.firstname = firstname;
    user.lastname = lastname;
    user.password = hashedPassword;

    if (!firstname || !lastname || !password) {
      return res.status(400).json({ msg: `Please fill up the given fields.` });
    }
    await UserRepository.save(user);
    return res.status(200).json({ msg: `Updated user with id:${id}`, user });
  } catch (error) {
    return res.status(500).json(error);
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

export { getAllUsers, getSingleUser, updateUser, deleteUser };
