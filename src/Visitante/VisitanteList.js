// src/components/Visitante/VisitanteList.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField } from 'react-admin';

const VisitanteList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="tipo" />
      <ReferenceField label="Persona" source="persona_id" reference="personas">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField label="Residencia" source="residencia_id" reference="residencias">
        <TextField source="nombre" />
      </ReferenceField>
      <DateField source="fecha_registro" />
    </Datagrid>
  </List>
);

export default VisitanteList;
