import { Acceleration as TAcceleration } from "../api/acceleration/Acceleration";

export const ACCELERATION_TITLE_FIELD = "id";

export const AccelerationTitle = (record: TAcceleration): string => {
  return record.id?.toString() || String(record.id);
};
