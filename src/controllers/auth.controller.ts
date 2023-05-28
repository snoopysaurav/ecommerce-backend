import { Request, Response } from "express";

const signup = (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(500).json({ msg: `Internal Server Error` });
  }
};
