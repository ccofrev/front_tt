// src/components/Trabajador/TrabajadorEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

const TrabajadorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="tipo" />
      <ReferenceInput label="Persona" source="persona_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Residencia" source="residencia_id" reference="residencias">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput source="fecha_registro" />
    </SimpleForm>
  </Edit>
);

export default TrabajadorEdit;
