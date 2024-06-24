import { JsonValue } from "type-fest";
import { Topic } from "../topic/Topic";

export type Flowchart = {
  createdAt: Date;
  diagramContent: JsonValue;
  id: string;
  topic?: Topic | null;
  updatedAt: Date;
};
