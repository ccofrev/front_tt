import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const DispositivoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Tipo" source="tipo" />
      <TextInput label="Marca" source="marca" />
      <TextInput label="Modelo" source="modelo" />
      <TextInput label="Protocolo" source="protocolo" />
      <TextInput label="Tópico" source="topico" />
      <TextInput label="Subtópico" source="subtopico" />
    </SimpleForm>
  </Create>
);
