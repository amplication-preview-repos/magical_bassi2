import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  topic?: TopicWhereUniqueInput | null;
};
