import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AccelerationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="x" source="x" />
        <NumberInput label="y" source="y" />
        <NumberInput label="z" source="z" />
      </SimpleForm>
    </Create>
  );
};
