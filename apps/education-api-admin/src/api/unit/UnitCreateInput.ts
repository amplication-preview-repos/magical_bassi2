import { TopicCreateNestedManyWithoutUnitsInput } from "./TopicCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  name?: string | null;
  topics?: TopicCreateNestedManyWithoutUnitsInput;
};
