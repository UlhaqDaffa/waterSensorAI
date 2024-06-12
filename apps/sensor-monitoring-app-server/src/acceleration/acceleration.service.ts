import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccelerationServiceBase } from "./base/acceleration.service.base";

@Injectable()
export class AccelerationService extends AccelerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
