import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateRoleDTO {
  @ApiModelProperty({
    description: "Role name",
    readOnly: true,
  })
  @IsString()
  name: string;
}
