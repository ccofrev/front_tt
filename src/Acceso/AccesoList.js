import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, BooleanField } from 'react-admin';

export const AccesoList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Residente" source="residente_id" reference="personas">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField label="Visitante" source="visitante_id" reference="visitantes">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField label="Trabajador" source="trabajador_id" reference="trabajadores">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField label="Dispositivo" source="dispositivo_id" reference="dispositivos">
        <TextField source="tipo" />
      </ReferenceField>
      <ReferenceField label="Método de Acceso 1" source="metodo_acceso_id_1" reference="metodoaccesos">
        <TextField source="tipo" />
      </ReferenceField>
      <ReferenceField label="Método de Acceso 2" source="metodo_acceso_id_2" reference="metodoaccesos">
        <TextField source="tipo" />
      </ReferenceField>
      <ReferenceField label="Método de Acceso 3" source="metodo_acceso_id_3" reference="metodoaccesos">
        <TextField source="tipo" />
      </ReferenceField>
      <DateField source="inicio_validez" />
      <DateField source="fin_validez" />
      <BooleanField source="temporal" />
      <TextField source="estado" />
    </Datagrid>
  </List>
);
