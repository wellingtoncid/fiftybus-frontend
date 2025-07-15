import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://fiftybus.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || Cookies.get('token');
  console.log("Token enviado:", config.headers.Authorization);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});