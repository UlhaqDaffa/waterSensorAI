import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TurbidityServiceBase } from "./base/turbidity.service.base";

@Injectable()
export class TurbidityService extends TurbidityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
