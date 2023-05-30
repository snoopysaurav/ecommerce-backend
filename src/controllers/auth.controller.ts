import { Request, Response } from "express";
import { AppDatasource } from "../database/datasource";
import UserEntity from "../database/user.entity";
import bcrypt from "bcrypt";

const UserRepository = AppDatasource.getRepository(UserEntity);

const signup = async (req: Request, res: Response) => {
  try {
    const user = new UserEntity();

    const { firstname, lastname, username, email, password } = req.body;

    const isEmail = await UserRepository.findOne({
      where: {
        email: email,
      },
    });

    const isUsername = await UserRepository.findOne({
      where: {
        username: username,
      },
    });
    if (!isUsername && !isEmail) {
      // hash password
      const saltRounds: number = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      user.firstname = firstname;
      user.lastname = lastname;
      user.username = username;
      user.email = email;
      user.password = hashedPassword;

      await UserRepository.save(user);
      return res.status(201).json({ msg: `User created..` });
    }
    return res.status(400).json({ msg: `Username or Email already exist..` });
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

export { signup };
