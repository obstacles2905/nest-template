import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { UserDTO } from "../dtos/user.dto";
import { RegistrationService } from "./registration.service";

@ApiUseTags("registration")
@Controller("registration")
export class RegistrationController {
  constructor(private regService: RegistrationService) {}

  /**
   * Register user
   *
   * @returns {Promise<UserDTO[]>}
   */
  @Get()
  @ApiOperation({
    title: "some title",
    description: "some descr",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  authorize() {
    return this.regService.register();
  }
}