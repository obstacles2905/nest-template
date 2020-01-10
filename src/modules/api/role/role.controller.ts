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
import { RoleDTO } from "../dtos/role.dto";
import { CreateRoleDTO } from "./dtos/create-role.dto";
import { DeleteRoleDTO } from "./dtos/delete-role.dto";
import { UpdateRoleDTO } from "./dtos/update-role.dto";
import { RoleService } from "./role.service";

@ApiUseTags("role")
@Controller("role")
export class RoleController {
  constructor(private roleService: RoleService) {}

  /**
   * Get all roles
   *
   * @returns {Promise<RoleDTO[]>}
   */
  @Get()
  @ApiOperation({
    title: "Get all roles",
    description: "Return all roles stored in db",
  })
  @ApiOkResponse({
    type: [RoleDTO],
  })
  getRoles(): Promise<RoleDTO[]> {
    return this.roleService.getRoles();
  }

  /**
   * Get specific role
   *
   * @param {string} id
   * @returns {Promise<RoleDTO>}
   */
  @Get("/:id")
  @ApiOperation({
    title: "Get one role",
    description: "Return specific role according to the required id",
  })
  @ApiOkResponse({
    type: RoleDTO,
  })
  getUser(@Param("id") id: string): Promise<RoleDTO> {
    return this.roleService.getRole(id);
  }

  /**
   * Add role
   *
   * @param {CreateRoleDTO} data
   * @returns {Promise<CreateRoleDTO>}
   */
  @Post()
  @ApiOperation({
    title: "Create role",
    description: "Add new role to the db",
  })
  @ApiOkResponse({
    type: CreateRoleDTO,
  })
  createUser(@Body() data: CreateRoleDTO): Promise<CreateRoleDTO> {
    return this.roleService.createRole(data);
  }

  /**
   * Update specific role
   *
   * @param {string} id
   * @param {UpdateRoleDTO} data
   * @returns {Promise<RoleDTO | undefined>}
   */
  @Put("/:id")
  @ApiOperation({
    title: "Update user",
    description: "Update user name",
  })
  @ApiOkResponse({
    type: UpdateRoleDTO,
  })
  updateUser(
    @Param("id") id: string,
    @Body() data: UpdateRoleDTO,
  ): Promise<RoleDTO | undefined> {
    return this.roleService.updateRole(id, data);
  }

  /**
   * Delete specific role
   *
   * @param {string} id
   * @returns {Promise<RoleDTO>}
   */
  @Delete("/:id")
  @ApiOperation({
    title: "Delete role",
    description: "Delete requested role from db",
  })
  @ApiOkResponse({
    type: DeleteRoleDTO,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteLocation(@Param("id") id: string): Promise<RoleDTO> {
    return this.roleService.deleteRole(id);
  }
}
