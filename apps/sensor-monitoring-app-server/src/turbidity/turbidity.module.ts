import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TurbidityModuleBase } from "./base/turbidity.module.base";
import { TurbidityService } from "./turbidity.service";
import { TurbidityController } from "./turbidity.controller";
import { TurbidityResolver } from "./turbidity.resolver";

@Module({
  imports: [TurbidityModuleBase, forwardRef(() => AuthModule)],
  controllers: [TurbidityController],
  providers: [TurbidityService, TurbidityResolver],
  exports: [TurbidityService],
})
export class TurbidityModule {}
