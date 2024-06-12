import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccelerationModuleBase } from "./base/acceleration.module.base";
import { AccelerationService } from "./acceleration.service";
import { AccelerationController } from "./acceleration.controller";
import { AccelerationResolver } from "./acceleration.resolver";

@Module({
  imports: [AccelerationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccelerationController],
  providers: [AccelerationService, AccelerationResolver],
  exports: [AccelerationService],
})
export class AccelerationModule {}
