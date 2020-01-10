import { ApiModelProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UserDTO {
  @Expose()
  readonly id: string;

  @ApiModelProperty({
    description: "User email",
    readOnly: true,
  })
  @Expose()
  readonly email: string;

  @ApiModelProperty({
    description: "User password",
    readOnly: true,
  })
  @Expose()
  readonly password: string;

  @ApiModelProperty({
    description: "CreatedAt timestamp",
    readOnly: true,
  })
  @Expose()
  readonly createdAt: Date;

  @ApiModelProperty({
    description: "UpdatedAt timestamp",
    readOnly: true,
  })
  @Expose()
  readonly updatedAt: Date;

  @ApiModelProperty({
    description: "roleId foreign key",
    readOnly: true,
  })
  @Expose()
  readonly roleId: string;

  @ApiModelProperty({
    description: "True if user's email is verified/activated",
    readOnly: true,
  })
  @Expose()
  readonly isVerified: boolean;
}
