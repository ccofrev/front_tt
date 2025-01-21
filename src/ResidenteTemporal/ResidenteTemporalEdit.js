// src/components/ResidenteTemporal/ResidenteTemporalEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

const ResidenteTemporalEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Residente" source="residente_id" reference="residentes">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput label="Fecha de Inicio" source="fecha_inicio" />
      <DateInput label="Fecha de Fin" source="fecha_fin" />
    </SimpleForm>
  </Edit>
);

export default ResidenteTemporalEdit;
