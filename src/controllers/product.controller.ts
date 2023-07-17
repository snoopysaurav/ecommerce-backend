import { Request, Response } from "express";
import { AppDatasource } from "../database/datasource";
import ProductEntity from "../database/product.entity";



const ProductRepository = AppDatasource.getRepository(ProductEntity);


const getAllProduct = async (req:Request, res:Response)=>{
  const product = ProductRepository.find();
  return res.status(200).json({product});
}

const createProduct = async (req:Request, res:Response)=>{
  try {
  console.log(req.file);
  const product = new ProductEntity();
  console.log(req.files)
  const { name , brand ,price , stock} = req.body;
  product.name = name;
  product.brand = brand;
  product.image = req.file.filename;
  product.price = price;
  product.stock = stock;

  await ProductRepository.save(product);
  return res.status(201).json({msg:`Product created`, product});
    
  } catch (error) {
    return res.status(500).json({'Internal Server Error': error});
    
  }

}

export { getAllProduct , createProduct };
