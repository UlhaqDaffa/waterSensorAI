import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemperatureServiceBase } from "./base/temperature.service.base";

@Injectable()
export class TemperatureService extends TemperatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
