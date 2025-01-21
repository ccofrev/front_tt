// src/components/Residente/ResidenteEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

const ResidenteEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Persona" source="persona_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Residencia" source="residencia_id" reference="residencias">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="rol_residencia" />
      <DateInput source="fecha_ingreso" />
      <BooleanInput source="activo" />
    </SimpleForm>
  </Edit>
);

export default ResidenteEdit;
