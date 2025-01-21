import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const PersonaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput source="apellido2" />
      <TextInput source="telefono" />
      <TextInput source="email" type="email" />
      <TextInput source="estado" />
    </SimpleForm>
  </Edit>
);
