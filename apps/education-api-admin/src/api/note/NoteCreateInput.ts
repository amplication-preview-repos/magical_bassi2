import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  topic?: TopicWhereUniqueInput | null;
};
