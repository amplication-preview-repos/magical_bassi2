import { InputJsonValue } from "../../types";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type UmlDiagramCreateInput = {
  diagramContent?: InputJsonValue;
  topic?: TopicWhereUniqueInput | null;
};
