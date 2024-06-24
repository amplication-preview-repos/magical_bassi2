import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type FlowchartWhereInput = {
  diagramContent?: JsonFilter;
  id?: StringFilter;
  topic?: TopicWhereUniqueInput;
};
