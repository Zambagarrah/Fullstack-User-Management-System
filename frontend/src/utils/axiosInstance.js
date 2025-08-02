import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('access');
      toast.error('Session expired. Please log in again.');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);


export default axiosInstance;
