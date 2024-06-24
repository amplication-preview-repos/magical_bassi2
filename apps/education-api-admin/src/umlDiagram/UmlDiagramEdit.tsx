import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TopicTitle } from "../topic/TopicTitle";

export const UmlDiagramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="topic.id" reference="Topic" label="Topic">
          <SelectInput optionText={TopicTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
