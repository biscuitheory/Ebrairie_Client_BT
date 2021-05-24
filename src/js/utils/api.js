import axios from 'axios';

const API = process.env.REACT_APP_DEV_API_URL;

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default instance;