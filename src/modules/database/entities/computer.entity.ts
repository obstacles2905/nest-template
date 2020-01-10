import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "computer"})
export class ComputerEntity {

  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("varchar")
  readonly name: string;

  @Column("varchar")
  readonly sessionStatus: string;

  @Column("varchar")
  readonly computerStatus: string;

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

}