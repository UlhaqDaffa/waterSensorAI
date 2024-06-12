import { PH as TPH } from "../api/ph/PH";

export const PH_TITLE_FIELD = "id";

export const PHTitle = (record: TPH): string => {
  return record.id?.toString() || String(record.id);
};
