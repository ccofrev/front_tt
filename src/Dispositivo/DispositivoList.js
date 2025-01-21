import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const DispositivoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="tipo" />
      <TextField source="marca" />
      <TextField source="modelo" />
      <TextField source="protocolo" />
      <TextField source="topico" />
      <TextField source="subtopico" />
    </Datagrid>
  </List>
);
