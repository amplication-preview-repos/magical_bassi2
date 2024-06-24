import { SortOrder } from "../../util/SortOrder";

export type UmlDiagramOrderByInput = {
  createdAt?: SortOrder;
  diagramContent?: SortOrder;
  id?: SortOrder;
  topicId?: SortOrder;
  updatedAt?: SortOrder;
};
