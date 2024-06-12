import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AccelerationWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  x?: FloatNullableFilter;
  y?: FloatNullableFilter;
  z?: FloatNullableFilter;
};
