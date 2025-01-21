// src/components/Visitante/VisitanteCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

const VisitanteCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="tipo" />
      <ReferenceInput label="Persona" source="persona_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Residencia" source="residencia_id" reference="residencias">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput source="fecha_registro" />
    </SimpleForm>
  </Create>
);

export default VisitanteCreate;
