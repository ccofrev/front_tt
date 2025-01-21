// src/components/ResidenteTemporal/ResidenteTemporalList.js
import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, EditButton } from 'react-admin';

const ResidenteTemporalList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Residente" source="residente_id" reference="residentes">
        <TextField source="nombre" />
      </ReferenceField>
      <DateField source="fecha_inicio" />
      <DateField source="fecha_fin" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ResidenteTemporalList;
