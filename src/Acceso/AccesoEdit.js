import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

export const AccesoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Residente" source="residente_id" reference="personas">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Visitante" source="visitante_id" reference="visitantes">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Trabajador" source="trabajador_id" reference="trabajadores">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput label="Dispositivo" source="dispositivo_id" reference="dispositivos">
        <SelectInput optionText="tipo" />
      </ReferenceInput>
      <ReferenceInput label="Método de Acceso 1" source="metodo_acceso_id_1" reference="metodoaccesos">
        <SelectInput optionText="tipo" />
      </ReferenceInput>
      <ReferenceInput label="Método de Acceso 2" source="metodo_acceso_id_2" reference="metodoaccesos">
        <SelectInput optionText="tipo" />
      </ReferenceInput>
      <ReferenceInput label="Método de Acceso 3" source="metodo_acceso_id_3" reference="metodoaccesos">
        <SelectInput optionText="tipo" />
      </ReferenceInput>
      <DateInput label="Inicio de Validez" source="inicio_validez" />
      <DateInput label="Fin de Validez" source="fin_validez" />
      <BooleanInput label="Temporal" source="temporal" />
      <TextInput label="Estado" source="estado" />
    </SimpleForm>
  </Edit>
);
