import { Flowchart } from "../flowchart/Flowchart";
import { Note } from "../note/Note";
import { UmlDiagram } from "../umlDiagram/UmlDiagram";
import { Unit } from "../unit/Unit";

export type Topic = {
  createdAt: Date;
  flowcharts?: Array<Flowchart>;
  id: string;
  name: string | null;
  notes?: Array<Note>;
  umlDiagrams?: Array<UmlDiagram>;
  unit?: Unit | null;
  updatedAt: Date;
};
