import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const MetodoAccesoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Tipo" source="tipo" />
    </SimpleForm>
  </Create>
);
