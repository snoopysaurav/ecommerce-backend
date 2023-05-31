import { Request, Response } from "express";
import { AppDatasource } from "../database/datasource";
import UserEntity from "../database/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserRepository.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(400).json({ msg: `Incorrect Email Address.` });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ msg: `Incorrect Password` });
    }
    const payload = { id: user.id, email: user.email };
    const access_token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    return res
      .status(200)
      .json({ msg: `User Signed in.`, access_token: access_token });
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

const signout = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};

export { signup, signin };
