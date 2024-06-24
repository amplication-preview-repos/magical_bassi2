import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TopicWhereUniqueInput } from "../topic/TopicWhereUniqueInput";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  topic?: TopicWhereUniqueInput;
};
