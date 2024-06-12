/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PH as PrismaPH } from "@prisma/client";

export class PHServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PHCountArgs, "select">): Promise<number> {
    return this.prisma.ph.count(args);
  }

  async phs<T extends Prisma.PHFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PHFindManyArgs>
  ): Promise<PrismaPH[]> {
    return this.prisma.ph.findMany<Prisma.PHFindManyArgs>(args);
  }
  async ph<T extends Prisma.PHFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PHFindUniqueArgs>
  ): Promise<PrismaPH | null> {
    return this.prisma.ph.findUnique(args);
  }
  async createPH<T extends Prisma.PHCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PHCreateArgs>
  ): Promise<PrismaPH> {
    return this.prisma.ph.create<T>(args);
  }
  async updatePH<T extends Prisma.PHUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PHUpdateArgs>
  ): Promise<PrismaPH> {
    return this.prisma.ph.update<T>(args);
  }
  async deletePH<T extends Prisma.PHDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PHDeleteArgs>
  ): Promise<PrismaPH> {
    return this.prisma.ph.delete(args);
  }
}
