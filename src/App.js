// App.js
import React from 'react';
import dataProvider from './dataProvider';
import { Admin, Resource } from 'react-admin';
import { DispositivoList, DispositivoEdit, DispositivoCreate } from './Dispositivo';
import { MetodoAccesoList, MetodoAccesoEdit, MetodoAccesoCreate } from './MetodoAcceso';
import { PersonaList, PersonaEdit, PersonaCreate } from './Persona';
import { RegistroAccesoList, RegistroAccesoEdit, RegistroAccesoCreate } from './RegistroAcceso';
import { ResidenciaList, ResidenciaEdit, ResidenciaCreate } from './Residencia';
import { ResidenteTemporalList, ResidenteTemporalEdit, ResidenteTemporalCreate } from './ResidenteTemporal';
import { AccesoList, AccesoEdit, AccesoCreate } from './Acceso';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './Usuario';
import { VehiculoList, VehiculoEdit, VehiculoCreate } from './Vehiculo';
import { VisitanteList, VisitanteEdit, VisitanteCreate } from './Visitante';
import { TrabajadorList, TrabajadorEdit, TrabajadorCreate } from './Trabajador';



const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="dispositivos"
      list={DispositivoList}
      edit={DispositivoEdit}
      create={DispositivoCreate}
    />
    <Resource
      name="metodoaccesos"
      list={MetodoAccesoList}
      edit={MetodoAccesoEdit}
      create={MetodoAccesoCreate}
    />
    <Resource
      name="personas"
      list={PersonaList}
      edit={PersonaEdit}
      create={PersonaCreate}
    />
    <Resource
      name="registroaccesos"
      list={RegistroAccesoList}
      edit={RegistroAccesoEdit}
      create={RegistroAccesoCreate}
    />
    <Resource
      name="residencias"
      list={ResidenciaList}
      edit={ResidenciaEdit}
      create={ResidenciaCreate}
    />
    <Resource
      name="residentetemporals"
      list={ResidenteTemporalList}
      edit={ResidenteTemporalEdit}
      create={ResidenteTemporalCreate}
    />
    <Resource
      name="accesos"
      list={AccesoList}
      edit={AccesoEdit}
      create={AccesoCreate}
    />
    <Resource
      name="usuarios"
      list={UsuarioList}
      edit={UsuarioEdit}
      create={UsuarioCreate}
    />
    <Resource
      name="vehiculos"
      list={VehiculoList}
      edit={VehiculoEdit}
      create={VehiculoCreate}
    />
    <Resource
      name="visitantes"
      list={VisitanteList}
      edit={VisitanteEdit}
      create={VisitanteCreate}
    />
    <Resource
      name="trabajadores"
      list={TrabajadorList}
      edit={TrabajadorEdit}
      create={TrabajadorCreate}
    />
  </Admin>
);

export default App;