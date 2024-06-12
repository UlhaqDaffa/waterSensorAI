import { AccelerationWhereInput } from "./AccelerationWhereInput";
import { AccelerationOrderByInput } from "./AccelerationOrderByInput";

export type AccelerationFindManyArgs = {
  where?: AccelerationWhereInput;
  orderBy?: Array<AccelerationOrderByInput>;
  skip?: number;
  take?: number;
};
