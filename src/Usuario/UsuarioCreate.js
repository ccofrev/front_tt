// src/components/Usuario/UsuarioCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

const UsuarioCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);

export default UsuarioCreate;
