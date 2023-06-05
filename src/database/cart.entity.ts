import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProductEntity from "./product.entity";

@Entity()
export default class CartEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => ProductEntity, (product) => product.cart)
  product: ProductEntity[];
}
