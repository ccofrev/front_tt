import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

export const PersonaList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="apellido2" />
      <TextField source="telefono" />
      <EmailField source="email" />
      <TextField source="estado" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
