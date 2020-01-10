import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity({ name: "user" })
@Index(["id", "email"])
export class UserEntity {
  /**
   * User ID.
   */
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  /**
   * Email
   */
  @Column("varchar")
  readonly email: string;

  /**
   * Password
   */
  @Column("varchar")
  password: string;

  /**
   * User balance
   *
   */
  @Column("integer")
  balance: number;

  /**
   * True if user's email is verified/activated
   */
  @Column("boolean")
  readonly isVerified: boolean;

  /**
   * roleId foreign key
   */
  @Column("varchar")
  readonly roleId: string;

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
   * Role
   */
  @ManyToOne(() => RoleEntity, role => role.id)
  readonly role: RoleEntity;
}
