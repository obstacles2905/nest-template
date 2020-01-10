import { ApiModelProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsUUID } from "class-validator";

export class RoleDTO {
  @IsUUID()
  @Expose()
  readonly id: string;

  @ApiModelProperty({
    description: "Role name",
    readOnly: true,
  })
  @Expose()
  readonly name: string;

  @Expose()
  readonly createdAt: Date;

  @Expose()
  readonly updatedAt: Date;
}
