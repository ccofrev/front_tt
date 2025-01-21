import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PersonaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput source="apellido2" />
      <TextInput source="telefono" />
      <TextInput source="email" type="email" />
      <TextInput source="estado" />
    </SimpleForm>
  </Create>
);
