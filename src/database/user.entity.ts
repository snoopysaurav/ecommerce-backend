import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ProductEntity from "./product.entity";
import CartEntity from "./cart.entity";

export enum role {
  USER = "user",
  ADMIN = "admin",
}

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: role, default: role.USER })
  role: role;

  @OneToMany(() => ProductEntity, (product) => product.user)
  product: ProductEntity[];

  @OneToOne(()=> CartEntity, (cart)=>{ cart.user})
  cart: CartEntity;
}
