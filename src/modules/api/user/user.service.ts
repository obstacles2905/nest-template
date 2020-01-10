import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";
import { TransformPlainToClass } from "class-transformer";
import { Repository } from "typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  /**
   * Get all users
   *
   * @returns {Promise<UserDTO[]>}
   */
  @TransformPlainToClass(UserDTO)
  async getUsers(): Promise<UserDTO[]> {
    return this.userRepository.find();
  }

  /**
   * Get specific user by id
   *
   * @param {string} email
   * @returns {Promise<UserDTO>}
   */
  @TransformPlainToClass(UserDTO)
  async getUser(email: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }
    return user;
  }

  /**
   * Create user
   *
   * @param {CreateUserDTO} rawData
   * @returns {Promise<UserDTO | undefined>}
   */
  @TransformPlainToClass(UserDTO)
  async createUser(rawData: CreateUserDTO): Promise<UserDTO | undefined> {
    const dataToStore = await this.userRepository.create(rawData);

    const emailExists = await this.userRepository.findOne({
      email: dataToStore.email,
    });
    if (emailExists) {
      throw new Error("Email already exists");
    }

    dataToStore.password = await bcrypt.hash(rawData.password, 10);
    dataToStore.balance = 0;

    await this.userRepository.save(dataToStore);
    return this.userRepository.findOne({ email: dataToStore.email });
  }

  /**
   * Update specific user
   *
   * @param {string} id
   * @param {UpdateUserDTO} data
   * @returns {Promise<UserDTO | undefined>}
   */
  @TransformPlainToClass(UserDTO)
  async updateUser(
    id: string,
    data: UpdateUserDTO,
  ): Promise<UserDTO | undefined> {
    await this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set(data)
      .where("id = :id", { id })
      .execute();
    return this.userRepository.findOne({ id });
  }

  /**
   * Delete specific user
   *
   * @param {string} id
   * @returns {Promise<UserDTO>}
   */
  @TransformPlainToClass(UserDTO)
  async deleteUser(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }
    await this.userRepository.delete({ id });

    return user;
  }
}
