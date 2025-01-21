import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const MetodoAccesoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Tipo" source="tipo" />
    </SimpleForm>
  </Edit>
);
