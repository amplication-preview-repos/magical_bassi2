import { InputJsonValue } from "../../types";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type FlowchartUpdateInput = {
  diagramContent?: InputJsonValue;
  topic?: TopicWhereUniqueInput | null;
};
