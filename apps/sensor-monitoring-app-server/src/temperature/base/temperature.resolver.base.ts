/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Temperature } from "./Temperature";
import { TemperatureCountArgs } from "./TemperatureCountArgs";
import { TemperatureFindManyArgs } from "./TemperatureFindManyArgs";
import { TemperatureFindUniqueArgs } from "./TemperatureFindUniqueArgs";
import { CreateTemperatureArgs } from "./CreateTemperatureArgs";
import { UpdateTemperatureArgs } from "./UpdateTemperatureArgs";
import { DeleteTemperatureArgs } from "./DeleteTemperatureArgs";
import { TemperatureService } from "../temperature.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Temperature)
export class TemperatureResolverBase {
  constructor(
    protected readonly service: TemperatureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "read",
    possession: "any",
  })
  async _temperaturesMeta(
    @graphql.Args() args: TemperatureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Temperature])
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "read",
    possession: "any",
  })
  async temperatures(
    @graphql.Args() args: TemperatureFindManyArgs
  ): Promise<Temperature[]> {
    return this.service.temperatures(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Temperature, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "read",
    possession: "own",
  })
  async temperature(
    @graphql.Args() args: TemperatureFindUniqueArgs
  ): Promise<Temperature | null> {
    const result = await this.service.temperature(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Temperature)
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "create",
    possession: "any",
  })
  async createTemperature(
    @graphql.Args() args: CreateTemperatureArgs
  ): Promise<Temperature> {
    return await this.service.createTemperature({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Temperature)
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "update",
    possession: "any",
  })
  async updateTemperature(
    @graphql.Args() args: UpdateTemperatureArgs
  ): Promise<Temperature | null> {
    try {
      return await this.service.updateTemperature({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Temperature)
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "delete",
    possession: "any",
  })
  async deleteTemperature(
    @graphql.Args() args: DeleteTemperatureArgs
  ): Promise<Temperature | null> {
    try {
      return await this.service.deleteTemperature(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
