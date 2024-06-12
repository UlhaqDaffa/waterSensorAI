import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TemperatureModuleBase } from "./base/temperature.module.base";
import { TemperatureService } from "./temperature.service";
import { TemperatureController } from "./temperature.controller";
import { TemperatureResolver } from "./temperature.resolver";

@Module({
  imports: [TemperatureModuleBase, forwardRef(() => AuthModule)],
  controllers: [TemperatureController],
  providers: [TemperatureService, TemperatureResolver],
  exports: [TemperatureService],
})
export class TemperatureModule {}
