import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TemperatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
