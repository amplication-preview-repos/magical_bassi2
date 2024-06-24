import { FlowchartUpdateManyWithoutTopicsInput } from "./FlowchartUpdateManyWithoutTopicsInput";
import { NoteUpdateManyWithoutTopicsInput } from "./NoteUpdateManyWithoutTopicsInput";
import { UmlDiagramUpdateManyWithoutTopicsInput } from "./UmlDiagramUpdateManyWithoutTopicsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type TopicUpdateInput = {
  flowcharts?: FlowchartUpdateManyWithoutTopicsInput;
  name?: string | null;
  notes?: NoteUpdateManyWithoutTopicsInput;
  umlDiagrams?: UmlDiagramUpdateManyWithoutTopicsInput;
  unit?: UnitWhereUniqueInput | null;
};
