import { InputJsonValue } from "../../types";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type FlowchartCreateInput = {
  diagramContent?: InputJsonValue;
  topic?: TopicWhereUniqueInput | null;
};
