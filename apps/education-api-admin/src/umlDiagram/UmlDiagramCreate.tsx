import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TopicTitle } from "../topic/TopicTitle";

export const UmlDiagramCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="topic.id" reference="Topic" label="Topic">
          <SelectInput optionText={TopicTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
