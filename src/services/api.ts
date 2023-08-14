import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://627e6682b75a25d3f3b74d27.mockapi.io/api/',
  timeout: 1000,
});
