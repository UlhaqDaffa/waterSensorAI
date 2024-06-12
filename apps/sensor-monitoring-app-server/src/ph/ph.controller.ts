import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PHService } from "./ph.service";
import { PHControllerBase } from "./base/ph.controller.base";

@swagger.ApiTags("phs")
@common.Controller("phs")
export class PHController extends PHControllerBase {
  constructor(
    protected readonly service: PHService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
