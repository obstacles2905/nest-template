import { ApiModelProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, IsUUID } from "class-validator";

export class UpdateUserDTO {
  @ApiModelProperty({
    description: "User email",
    readOnly: true,
  })
  @IsEmail()
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
