import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

export const RegistroAccesoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Acceso" source="acceso_id" reference="accesos">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <DateInput label="Fecha y Hora" source="fecha_hora" />
      <TextInput label="Tipo" source="tipo" />
      <TextInput label="Creado Por" source="creado_por" />
    </SimpleForm>
  </Edit>
);
