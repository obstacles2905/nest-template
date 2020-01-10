import { ApiModelProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, IsUUID } from "class-validator";

export class CreateUserDTO {
  @ApiModelProperty({
    description: "User email",
    readOnly: true,
  })
  @IsString()
  readonly email: string;

  @ApiModelProperty({
    description: "User password",
    readOnly: true,
  })
  @IsString()
  readonly password: string;

  @ApiModelProperty({
    description: "roleId foreign key",
    readOnly: true,
  })
  @IsUUID()
  readonly roleId: string;

  @ApiModelProperty({
    description: "True if user's email is verified/activated",
    readOnly: true,
  })
  @IsBoolean()
  readonly isVerified: boolean;
}
