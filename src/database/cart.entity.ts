import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ProductEntity from "./product.entity";
import UserEntity from "./user.entity";

@Entity()
export default class CartEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => UserEntity, (user) => user.cart)
  user: UserEntity;
}
