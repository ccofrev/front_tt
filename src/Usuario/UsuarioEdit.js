// src/components/Usuario/UsuarioEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

const UsuarioEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="Residente" source="residente_id" reference="residentes">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="nombre_usuario" />
      <TextInput source="contrasena" />
      <SelectInput source="rol_usuario" choices={[
        { id: 'admin', name: 'Administrador' },
        { id: 'user', name: 'Usuario' },
      ]} />
      <DateInput source="fecha_creacion" />
      <BooleanInput source="activo" />
    </SimpleForm>
  </Edit>
);

export default UsuarioEdit;
