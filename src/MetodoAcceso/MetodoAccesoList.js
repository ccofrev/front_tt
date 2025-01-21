import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const MetodoAccesoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="tipo" />
    </Datagrid>
  </List>
);
