import { IsString } from "class-validator";

export class AuthDTO {

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}