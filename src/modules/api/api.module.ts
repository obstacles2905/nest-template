import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { RegistrationModule } from "./registration/registration.module";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";

@Module({
  imports: [
    AuthModule,
    RegistrationModule,
    RoleModule,
    UserModule,
    // Import feature modules here
  ],
})
export class APIModule {}
