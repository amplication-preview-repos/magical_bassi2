import { InputJsonValue } from "../../types";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type UmlDiagramUpdateInput = {
  diagramContent?: InputJsonValue;
  topic?: TopicWhereUniqueInput | null;
};
