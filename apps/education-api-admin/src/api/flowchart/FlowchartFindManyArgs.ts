import { FlowchartWhereInput } from "./FlowchartWhereInput";
import { FlowchartOrderByInput } from "./FlowchartOrderByInput";

export type FlowchartFindManyArgs = {
  where?: FlowchartWhereInput;
  orderBy?: Array<FlowchartOrderByInput>;
  skip?: number;
  take?: number;
};
