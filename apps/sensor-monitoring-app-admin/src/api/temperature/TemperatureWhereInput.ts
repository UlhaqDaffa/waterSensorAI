import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TemperatureWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
