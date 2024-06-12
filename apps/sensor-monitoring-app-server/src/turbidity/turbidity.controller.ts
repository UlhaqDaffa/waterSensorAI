import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TurbidityService } from "./turbidity.service";
import { TurbidityControllerBase } from "./base/turbidity.controller.base";

@swagger.ApiTags("turbidities")
@common.Controller("turbidities")
export class TurbidityController extends TurbidityControllerBase {
  constructor(
    protected readonly service: TurbidityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
