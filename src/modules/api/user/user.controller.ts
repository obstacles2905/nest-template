import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiUseTags } from "@nestjs/swagger";
import { UserDTO } from "../dtos/user.dto";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UserService } from "./user.service";

@ApiUseTags("user")
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Get all users
   *
   * @returns {Promise<UserDTO[]>}
   */
  @Get()
  @ApiOperation({
    title: "Get all users",
    description: "Return all users stored in db",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  getUsers(): Promise<UserDTO[]> {
    return this.userService.getUsers();
  }

  /**
   * Get specific user by id
   *
   * @param {string} id
   * @returns {Promise<UserDTO | undefined>}
   */
  @Get("/:id")
  @ApiOperation({
    title: "Get one user",
    description: "Return specific user according to the required id",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  getUser(@Param("id") id: string): Promise<UserDTO | undefined> {
    return this.userService.getUser(id);
  }

  /**
   * Create a new user
   *
   * @param {CreateUserDTO} data
   * @returns {Promise<CreateUserDTO | undefined>}
   */
  @Post()
  @ApiOperation({
    title: "Create user",
    description: "Add new user to the db",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  createUser(@Body() data: CreateUserDTO): Promise<CreateUserDTO | undefined> {
    return this.userService.createUser(data);
  }

  /**
   * Update specific user
   *
   * @param {string} id
   * @param {UpdateUserDTO} data
   * @returns {Promise<UserDTO | undefined>}
   */
  @Put("/:id")
  @ApiOperation({
    title: "Update user",
    description: "Update user name",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  updateUser(
    @Param("id") id: string,
    @Body() data: UpdateUserDTO,
  ): Promise<UserDTO | undefined> {
    return this.userService.updateUser(id, data);
  }

  /**
   * Delete specific user
   *
   * @param {UserDTO} params
   * @returns {Promise<UserDTO>}
   */
  @Delete("/:id")
  @ApiOperation({
    title: "Delete user",
    description: "Delete requested user from db",
  })
  @ApiOkResponse({
    type: UserDTO,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteLocation(@Param() params: UserDTO): Promise<UserDTO> {
    return this.userService.deleteUser(params.id);
  }

}
