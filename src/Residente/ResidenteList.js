// src/components/Residente/ResidenteList.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, BooleanField, EditButton } from 'react-admin';

const ResidenteList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Persona" source="persona_id" reference="personas">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField label="Residencia" source="residencia_id" reference="residencias">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="rol_residencia" />
      <DateField source="fecha_ingreso" />
      <BooleanField source="activo" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ResidenteList;
