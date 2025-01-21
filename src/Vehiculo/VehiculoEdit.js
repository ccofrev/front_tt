// src/components/Vehiculo/VehiculoEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

const VehiculoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="matricula" />
      <TextInput source="modelo" />
      <TextInput source="marca" />
      <TextInput source="color" />
      <ReferenceInput label="Propietario" source="persona_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput source="fecha_registro" />
    </SimpleForm>
  </Edit>
);

export default VehiculoEdit;
