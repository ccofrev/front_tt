// src/authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const authProvider = {
  // Método de inicio de sesión
  login: ({ username, password }) => {
    const request = new Request('http://192.168.0.248:5000/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  },

  // Método de cierre de sesión
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  // Verificación de autenticación
  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },

  // Manejo de errores
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Obtención de identidad
  getIdentity: () => {
    return Promise.resolve();
  },

  // Obtención de permisos
  getPermissions: () => {
    return Promise.resolve();
  },
};

export default authProvider;
