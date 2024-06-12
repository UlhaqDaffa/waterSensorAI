import { TemperatureWhereUniqueInput } from "./TemperatureWhereUniqueInput";
import { TemperatureUpdateInput } from "./TemperatureUpdateInput";

export type UpdateTemperatureArgs = {
  where: TemperatureWhereUniqueInput;
  data: TemperatureUpdateInput;
};
