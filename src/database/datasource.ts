import { DataSource } from "typeorm";
import dotenv from "dotenv";
import UserEntity from "./user.entity";
import ProductEntity from "./product.entity";
import CartEntity from "./cart.entity";

dotenv.config();

export const AppDatasource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity, ProductEntity, CartEntity],
  synchronize: true,
});
