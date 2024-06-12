/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PHWhereInput } from "./PHWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PHListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PHWhereInput,
  })
  @ValidateNested()
  @Type(() => PHWhereInput)
  @IsOptional()
  @Field(() => PHWhereInput, {
    nullable: true,
  })
  every?: PHWhereInput;

  @ApiProperty({
    required: false,
    type: () => PHWhereInput,
  })
  @ValidateNested()
  @Type(() => PHWhereInput)
  @IsOptional()
  @Field(() => PHWhereInput, {
    nullable: true,
  })
  some?: PHWhereInput;

  @ApiProperty({
    required: false,
    type: () => PHWhereInput,
  })
  @ValidateNested()
  @Type(() => PHWhereInput)
  @IsOptional()
  @Field(() => PHWhereInput, {
    nullable: true,
  })
  none?: PHWhereInput;
}
export { PHListRelationFilter as PHListRelationFilter };