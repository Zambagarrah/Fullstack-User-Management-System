import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem('access_token')
      ? jwt_decode(localStorage.getItem('access_token'))
      : null
  );
  const [loading, setLoading] = useState(true);

  const loginUser = async (credentials) => {
    const res = await axiosInstance.post('token/', credentials);
    localStorage.setItem('access_token', res.data.access);
    localStorage.setItem('refresh_token', res.data.refresh);
    setUser(jwt_decode(res.data.access));
  };

  const logoutUser = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  const registerUser = async (data) => {
    await axiosInstance.post('register/', data);
    await loginUser({ username: data.username, password: data.password });
  };

  const refreshToken = async () => {
    try {
      const res = await axiosInstance.post('token/refresh/', {
        refresh: localStorage.getItem('refresh_token'),
      });
      localStorage.setItem('access_token', res.data.access);
      setUser(jwt_decode(res.data.access));
    } catch (err) {
      logoutUser();
    }
  };

  const getProfile = async () => {
    const res = await axios.get('/api/profile/');
    return res.data;
  };

  const updateProfile = async (data) => {
    const res = await axios.put('/api/profile/', data);
    return res.data;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem('refresh_token')) refreshToken();
    }, 1000 * 60 * 4); // every 4 mins
    setLoading(false);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser, getProfile, updateProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
