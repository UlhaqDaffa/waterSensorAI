import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PHWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
