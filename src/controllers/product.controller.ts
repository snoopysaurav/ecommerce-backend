import { Request, Response } from "express";
import { FileRequest } from "../middlewares/file.middleware";

const addProduct = async (req: Request, res: Response) => {
  return res.status(200).json({ msg: `Product Added` });
};

const uploadProductImage = async (req: FileRequest, res: Response) => {
  console.log(req.files);
  return res.status(200).json({ FileName: req.files });
};

export { uploadProductImage };
