import { PHWhereInput } from "./PHWhereInput";
import { PHOrderByInput } from "./PHOrderByInput";

export type PHFindManyArgs = {
  where?: PHWhereInput;
  orderBy?: Array<PHOrderByInput>;
  skip?: number;
  take?: number;
};
