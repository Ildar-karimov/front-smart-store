import axios from 'axios';

const $api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  // @ts-ignore
  config.headers.Authorization = String(localStorage.getItem('token'))
  return config
})

export default $api;