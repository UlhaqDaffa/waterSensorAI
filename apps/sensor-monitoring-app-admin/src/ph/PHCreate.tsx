import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PHCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
