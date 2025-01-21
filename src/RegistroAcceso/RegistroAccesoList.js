import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

export const RegistroAccesoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Acceso" source="acceso_id" reference="accesos">
        <TextField source="id" />
      </ReferenceField>
      <DateField label="Fecha y Hora" source="fecha_hora" />
      <TextField label="Tipo" source="tipo" />
      <TextField label="Creado Por" source="creado_por" />
    </Datagrid>
  </List>
);
