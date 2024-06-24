import { Flowchart as TFlowchart } from "../api/flowchart/Flowchart";

export const FLOWCHART_TITLE_FIELD = "id";

export const FlowchartTitle = (record: TFlowchart): string => {
  return record.id?.toString() || String(record.id);
};
