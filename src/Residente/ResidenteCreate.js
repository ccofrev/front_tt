// src/components/Residente/ResidenteCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

const ResidenteCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);

export default ResidenteCreate;
