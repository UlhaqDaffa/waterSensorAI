import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TemperatureService } from "./temperature.service";
import { TemperatureControllerBase } from "./base/temperature.controller.base";

@swagger.ApiTags("temperatures")
@common.Controller("temperatures")
export class TemperatureController extends TemperatureControllerBase {
  constructor(
    protected readonly service: TemperatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
