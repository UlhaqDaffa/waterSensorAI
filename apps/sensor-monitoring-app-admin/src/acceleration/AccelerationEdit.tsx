import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AccelerationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="x" source="x" />
        <NumberInput label="y" source="y" />
        <NumberInput label="z" source="z" />
      </SimpleForm>
    </Edit>
  );
};
