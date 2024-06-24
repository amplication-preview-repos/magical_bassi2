import { FlowchartListRelationFilter } from "../flowchart/FlowchartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { UmlDiagramListRelationFilter } from "../umlDiagram/UmlDiagramListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type TopicWhereInput = {
  flowcharts?: FlowchartListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notes?: NoteListRelationFilter;
  umlDiagrams?: UmlDiagramListRelationFilter;
  unit?: UnitWhereUniqueInput;
};
