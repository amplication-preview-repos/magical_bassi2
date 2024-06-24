import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TOPIC_TITLE_FIELD } from "../topic/TopicTitle";

export const UmlDiagramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="diagramContent" source="diagramContent" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Topic" source="topic.id" reference="Topic">
          <TextField source={TOPIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
