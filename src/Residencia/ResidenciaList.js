import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ResidenciaList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="calle" />
      <TextField source="numero" />
      <TextField source="descripcion" />
      <TextField source="imagen" />
      <TextField source="tipo" />
    </Datagrid>
  </List>
);
