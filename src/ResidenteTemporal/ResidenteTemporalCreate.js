// src/components/ResidenteTemporal/ResidenteTemporalCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

const ResidenteTemporalCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Residente" source="residente_id" reference="residentes">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput label="Fecha de Inicio" source="fecha_inicio" />
      <DateInput label="Fecha de Fin" source="fecha_fin" />
    </SimpleForm>
  </Create>
);

export default ResidenteTemporalCreate;
