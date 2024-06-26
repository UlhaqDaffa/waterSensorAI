/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Acceleration as PrismaAcceleration } from "@prisma/client";

export class AccelerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccelerationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.acceleration.count(args);
  }

  async accelerations<T extends Prisma.AccelerationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccelerationFindManyArgs>
  ): Promise<PrismaAcceleration[]> {
    return this.prisma.acceleration.findMany<Prisma.AccelerationFindManyArgs>(
      args
    );
  }
  async acceleration<T extends Prisma.AccelerationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccelerationFindUniqueArgs>
  ): Promise<PrismaAcceleration | null> {
    return this.prisma.acceleration.findUnique(args);
  }
  async createAcceleration<T extends Prisma.AccelerationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccelerationCreateArgs>
  ): Promise<PrismaAcceleration> {
    return this.prisma.acceleration.create<T>(args);
  }
  async updateAcceleration<T extends Prisma.AccelerationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccelerationUpdateArgs>
  ): Promise<PrismaAcceleration> {
    return this.prisma.acceleration.update<T>(args);
  }
  async deleteAcceleration<T extends Prisma.AccelerationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccelerationDeleteArgs>
  ): Promise<PrismaAcceleration> {
    return this.prisma.acceleration.delete(args);
  }
}
