// src/components/Vehiculo/VehiculoCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

const VehiculoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="matricula" />
      <TextInput source="modelo" />
      <TextInput source="marca" />
      <TextInput source="color" />
      <ReferenceInput label="Propietario" source="persona_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput source="fecha_registro" />
    </SimpleForm>
  </Create>
);

export default VehiculoCreate;
