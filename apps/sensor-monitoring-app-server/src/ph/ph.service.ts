import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PHServiceBase } from "./base/ph.service.base";

@Injectable()
export class PHService extends PHServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
