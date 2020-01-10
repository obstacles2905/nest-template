import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { UserDTO } from "../dtos/user.dto";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dtos/auth.dto";

@ApiUseTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Authorize user
   *
   * @returns {Promise<UserDTO[]>}
   */
  @Post()
  @ApiOperation({
    title: "Authorization",
    description: "Authorization",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  authorize(@Body() authDTO: AuthDTO) {
    return this.authService.validateUser(authDTO);
  }
}