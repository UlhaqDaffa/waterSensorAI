import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccelerationService } from "./acceleration.service";
import { AccelerationControllerBase } from "./base/acceleration.controller.base";

@swagger.ApiTags("accelerations")
@common.Controller("accelerations")
export class AccelerationController extends AccelerationControllerBase {
  constructor(
    protected readonly service: AccelerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
