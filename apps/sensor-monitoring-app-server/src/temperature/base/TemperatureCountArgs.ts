/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TemperatureWhereInput } from "./TemperatureWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TemperatureCountArgs {
  @ApiProperty({
    required: false,
    type: () => TemperatureWhereInput,
  })
  @Field(() => TemperatureWhereInput, { nullable: true })
  @Type(() => TemperatureWhereInput)
  where?: TemperatureWhereInput;
}

export { TemperatureCountArgs as TemperatureCountArgs };
