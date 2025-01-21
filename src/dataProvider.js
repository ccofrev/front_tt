import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

// Puedes cambiar la URL a la de tu propia API
const apiUrl = 'http://192.168.0.248:5000/api'; // Cambia esto por la URL de tu API
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination || {};
    const { field, order } = params.sort || {};
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      _sort: field,
      _order: order,
      _start: page != null && perPage != null ? (page - 1) * perPage : undefined,
      _end: page != null && perPage != null ? page * perPage : undefined,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ json, headers }) => {
      const total = headers.get('X-Total-Count')
        ? parseInt(headers.get('X-Total-Count'), 10)
        : json.length;
      return {
        data: json,
        total,
      };
    });
  },

  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...params.data, id: json.id } }));
  },

  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  delete: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: 'DELETE',
    }).then(() => ({ data: {} }));
  },
};

export default dataProvider;
