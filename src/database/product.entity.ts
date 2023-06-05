import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import UserEntity from "./user.entity";
import CartEntity from "./cart.entity";

@Entity()
export default class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ default: "no brand" })
  brand: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @ManyToOne(() => UserEntity, (user) => user.product)
  user: UserEntity;

  @ManyToOne(() => CartEntity, (cart) => cart.product)
  cart: CartEntity;
}
