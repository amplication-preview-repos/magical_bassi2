import { FlowchartCreateNestedManyWithoutTopicsInput } from "./FlowchartCreateNestedManyWithoutTopicsInput";
import { NoteCreateNestedManyWithoutTopicsInput } from "./NoteCreateNestedManyWithoutTopicsInput";
import { UmlDiagramCreateNestedManyWithoutTopicsInput } from "./UmlDiagramCreateNestedManyWithoutTopicsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type TopicCreateInput = {
  flowcharts?: FlowchartCreateNestedManyWithoutTopicsInput;
  name?: string | null;
  notes?: NoteCreateNestedManyWithoutTopicsInput;
  umlDiagrams?: UmlDiagramCreateNestedManyWithoutTopicsInput;
  unit?: UnitWhereUniqueInput | null;
};
