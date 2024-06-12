import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PHModuleBase } from "./base/ph.module.base";
import { PHService } from "./ph.service";
import { PHController } from "./ph.controller";
import { PHResolver } from "./ph.resolver";

@Module({
  imports: [PHModuleBase, forwardRef(() => AuthModule)],
  controllers: [PHController],
  providers: [PHService, PHResolver],
  exports: [PHService],
})
export class PHModule {}
