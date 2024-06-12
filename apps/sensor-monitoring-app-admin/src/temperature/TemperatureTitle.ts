import { Temperature as TTemperature } from "../api/temperature/Temperature";

export const TEMPERATURE_TITLE_FIELD = "id";

export const TemperatureTitle = (record: TTemperature): string => {
  return record.id?.toString() || String(record.id);
};
