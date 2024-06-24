import { SortOrder } from "../../util/SortOrder";

export type FlowchartOrderByInput = {
  createdAt?: SortOrder;
  diagramContent?: SortOrder;
  id?: SortOrder;
  topicId?: SortOrder;
  updatedAt?: SortOrder;
};
