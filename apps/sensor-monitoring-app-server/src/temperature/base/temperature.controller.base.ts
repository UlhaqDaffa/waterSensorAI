/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TemperatureService } from "../temperature.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TemperatureCreateInput } from "./TemperatureCreateInput";
import { Temperature } from "./Temperature";
import { TemperatureFindManyArgs } from "./TemperatureFindManyArgs";
import { TemperatureWhereUniqueInput } from "./TemperatureWhereUniqueInput";
import { TemperatureUpdateInput } from "./TemperatureUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TemperatureControllerBase {
  constructor(
    protected readonly service: TemperatureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Temperature })
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTemperature(
    @common.Body() data: TemperatureCreateInput
  ): Promise<Temperature> {
    return await this.service.createTemperature({
      data: data,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Temperature] })
  @ApiNestedQuery(TemperatureFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async temperatures(@common.Req() request: Request): Promise<Temperature[]> {
    const args = plainToClass(TemperatureFindManyArgs, request.query);
    return this.service.temperatures({
      ...args,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Temperature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async temperature(
    @common.Param() params: TemperatureWhereUniqueInput
  ): Promise<Temperature | null> {
    const result = await this.service.temperature({
      where: params,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Temperature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTemperature(
    @common.Param() params: TemperatureWhereUniqueInput,
    @common.Body() data: TemperatureUpdateInput
  ): Promise<Temperature | null> {
    try {
      return await this.service.updateTemperature({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Temperature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Temperature",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTemperature(
    @common.Param() params: TemperatureWhereUniqueInput
  ): Promise<Temperature | null> {
    try {
      return await this.service.deleteTemperature({
        where: params,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
