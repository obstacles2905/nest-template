import { BadRequestException, ConflictException, Inject, NotImplementedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";

export class AuthService {
  constructor(
    @Inject("UserService")
    private userService: UserService) {}

  async validateUser({
    email,
    password
  }: {
    email: string,
    password: string
  }) {
    const user = await this.userService.getUser(email);

    if(!user) {
      throw new ConflictException("User is not found");
    }

    if(await bcrypt.compare(password, user.password)) {
      throw new NotImplementedException();
    } else {
      throw new BadRequestException("Not authorized");
    }
  }
}