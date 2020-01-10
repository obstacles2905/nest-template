import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransformPlainToClass } from "class-transformer";
import { Repository } from "typeorm";
import { RoleEntity } from "../../database/entities/role.entity";
import { RoleDTO } from "../dtos/role.dto";
import { CreateRoleDTO } from "./dtos/create-role.dto";
import { UpdateRoleDTO } from "./dtos/update-role.dto";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  /**
   *
   * @returns {Promise<RoleDTO[]>}
   */
  @TransformPlainToClass(RoleDTO)
  async getRoles(): Promise<RoleEntity[]> {
    return this.roleRepository.find();
  }

  /**
   * Get specific role
   *
   * @param {string} id
   * @returns {Promise<RoleDTO>}
   */
  @TransformPlainToClass(RoleDTO)
  async getRole(id: string): Promise<RoleDTO> {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException("Selected role doesn't exist");
    }
    return role;
  }

  /**
   * Create role
   *
   * @param {CreateRoleDTO} data
   * @returns {Promise<CreateRoleDTO>}
   */
  @TransformPlainToClass(CreateRoleDTO)
  async createRole(data: CreateRoleDTO): Promise<CreateRoleDTO> {
    const dataToStore = await this.roleRepository.create(data);
    await this.roleRepository.save(dataToStore);

    return dataToStore;
  }

  /**
   * Update specific role
   *
   * @param {string} id
   * @param {UpdateRoleDTO} data
   * @returns {Promise<RoleDTO | undefined>}
   */
  @TransformPlainToClass(RoleDTO)
  async updateRole(
    id: string,
    data: UpdateRoleDTO,
  ): Promise<RoleDTO | undefined> {
    await this.roleRepository
      .createQueryBuilder()
      .update(RoleEntity)
      .set({ name: data.name })
      .where("id = :id", { id })
      .execute();
    return this.roleRepository.findOne({ id });
  }

  /**
   * Delete specific role
   * @param {string} id
   * @returns {Promise<RoleDTO>}
   */
  @TransformPlainToClass(RoleDTO)
  async deleteRole(id: string): Promise<RoleDTO> {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException("Role doesn't exist");
    }
    await this.roleRepository.delete({ id });

    return role;
  }
}
