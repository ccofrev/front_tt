// src/components/Usuario/UsuarioList.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, BooleanField } from 'react-admin';

const UsuarioList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Residente" source="residente_id" reference="residentes">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="nombre_usuario" />
      <TextField source="rol_usuario" />
      <DateField source="fecha_creacion" />
      <BooleanField source="activo" />
    </Datagrid>
  </List>
);

export default UsuarioList;
