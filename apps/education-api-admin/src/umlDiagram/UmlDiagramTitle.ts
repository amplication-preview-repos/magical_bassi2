import { UmlDiagram as TUmlDiagram } from "../api/umlDiagram/UmlDiagram";

export const UMLDIAGRAM_TITLE_FIELD = "id";

export const UmlDiagramTitle = (record: TUmlDiagram): string => {
  return record.id?.toString() || String(record.id);
};
