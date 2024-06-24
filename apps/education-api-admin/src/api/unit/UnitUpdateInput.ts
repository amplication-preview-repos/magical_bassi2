import { TopicUpdateManyWithoutUnitsInput } from "./TopicUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  name?: string | null;
  topics?: TopicUpdateManyWithoutUnitsInput;
};
