// src/components/Vehiculo/VehiculoList.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField } from 'react-admin';

const VehiculoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="matricula" />
      <TextField source="modelo" />
      <TextField source="marca" />
      <TextField source="color" />
      <ReferenceField label="Propietario" source="persona_id" reference="personas">
        <TextField source="nombre" />
      </ReferenceField>
      <DateField source="fecha_registro" />
    </Datagrid>
  </List>
);

export default VehiculoList;
