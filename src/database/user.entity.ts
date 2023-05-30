import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
