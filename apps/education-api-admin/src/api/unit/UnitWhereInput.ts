import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TopicListRelationFilter } from "../topic/TopicListRelationFilter";

export type UnitWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  topics?: TopicListRelationFilter;
};
