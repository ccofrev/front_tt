import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ResidenciaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Calle" source="calle" />
      <TextInput label="Número" source="numero" />
      <TextInput label="Descripción" source="descripcion" />
      <TextInput label="Imagen" source="imagen" />
      <TextInput label="Tipo" source="tipo" />
    </SimpleForm>
  </Edit>
);
