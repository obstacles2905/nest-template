import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "role" })
export class RoleEntity {
  /**
   * Role ID.
   */
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  /**
   *  Name
   */
  @Column("varchar")
  readonly name: string;

  /**
   * Creation time of a record.
   */
  @CreateDateColumn({ type: "timestamp", readonly: true })
  readonly createdAt: Date;

  /**
   * Time where a record was last updated.
   */
  @UpdateDateColumn({ type: "timestamp", readonly: true })
  readonly updatedAt: Date;

  /**
   * User
   */
  @OneToMany(() => UserEntity, user => user.role)
  readonly user: UserEntity[];
}
