import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const sleep = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
};

api.interceptors.request.use(async config => {
  await sleep();
  return config;
});

export default api;
