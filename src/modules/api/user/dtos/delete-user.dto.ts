import { ApiModelProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class DeleteUserDTO {
  @ApiModelProperty({
    description: "id",
    readOnly: true,
  })
  @IsUUID()
  readonly id: string;
}
