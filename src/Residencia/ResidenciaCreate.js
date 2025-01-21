import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const ResidenciaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Calle" source="calle" />
      <TextInput label="Número" source="numero" />
      <TextInput label="Descripción" source="descripcion" />
      <TextInput label="Imagen" source="imagen" />
      <TextInput label="Tipo" source="tipo" />
    </SimpleForm>
  </Create>
);
