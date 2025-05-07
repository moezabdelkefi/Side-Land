import axios from 'axios';

const API = axios.create({ baseURL: `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api` });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const addProperty = (propertyData) => API.post('/properties', propertyData);
export const getProperties = (page, limit) => API.get(`/properties?page=${page}&limit=${limit}`);
export const getProperty = (id) => API.get(`/properties/${id}`);
export const updateProperty = (id, propertyData) => API.put(`/properties/${id}`, propertyData);
export const deleteProperty = (id) => API.delete(`/properties/${id}`);