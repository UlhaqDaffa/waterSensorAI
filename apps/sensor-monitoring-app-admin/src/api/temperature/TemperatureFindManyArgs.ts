import { TemperatureWhereInput } from "./TemperatureWhereInput";
import { TemperatureOrderByInput } from "./TemperatureOrderByInput";

export type TemperatureFindManyArgs = {
  where?: TemperatureWhereInput;
  orderBy?: Array<TemperatureOrderByInput>;
  skip?: number;
  take?: number;
};
