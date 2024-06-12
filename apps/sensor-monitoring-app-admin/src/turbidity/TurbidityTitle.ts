import { Turbidity as TTurbidity } from "../api/turbidity/Turbidity";

export const TURBIDITY_TITLE_FIELD = "id";

export const TurbidityTitle = (record: TTurbidity): string => {
  return record.id?.toString() || String(record.id);
};
