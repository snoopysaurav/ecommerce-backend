import { Request, Response } from "express";
import { FileRequest } from "../middlewares/file.middleware";
import { AppDatasource } from "../database/datasource";
import ProductEntity from "../database/product.entity";

const ProductRepository = AppDatasource.getRepository(ProductEntity);

const addProduct = async (req: Request, res: Response) => {
  return res.status(200).json({ msg: `Product Added` });
};

const getAllProduct = async (req:Request, res:Response)=>{
  const product = ProductRepository.find();
  return res.status(200).json({product});
}

const uploadProductImage = async (req: FileRequest, res: Response) => {
  console.log(req.files);
  return res.status(200).json({ FileName: req.files });
};

export { getAllProduct, uploadProductImage };
