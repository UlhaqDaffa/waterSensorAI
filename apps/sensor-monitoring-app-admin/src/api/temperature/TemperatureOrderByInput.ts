import { SortOrder } from "../../util/SortOrder";

export type TemperatureOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
