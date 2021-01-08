import axios from 'axios';

const api = axios.create({
  baseURL: 'http://paggue.io'
});

export default api;