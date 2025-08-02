import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { jwtDecode } from 'jwt-decode'; // ✅ Named import to avoid Vite SyntaxError
import axios from 'axios';

const AuthContext = createContext();

// 🔁 Custom hook for accessing auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // 🧠 Decode access_token if available
  const [user, setUser] = useState(() =>
    localStorage.getItem('access_token')
      ? jwtDecode(localStorage.getItem('access_token'))
      : null
  );

  const [loading, setLoading] = useState(true);

  // 🔐 Login and store tokens
  const loginUser = async (credentials) => {
    const res = await axiosInstance.post('token/', credentials);
    localStorage.setItem('access_token', res.data.access);
    localStorage.setItem('refresh_token', res.data.refresh);
    setUser(jwtDecode(res.data.access));
  };

  // 🔒 Logout and clear localStorage
  const logoutUser = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
  };

  // 📝 Register and auto-login
  const registerUser = async (data) => {
    await axiosInstance.post('register/', data);
    await loginUser({ username: data.username, password: data.password });
  };

  // 🔄 Refresh access token periodically
  const refreshToken = async () => {
    try {
      const res = await axiosInstance.post('token/refresh/', {
        refresh: localStorage.getItem('refresh_token'),
      });
      localStorage.setItem('access_token', res.data.access);
      setUser(jwtDecode(res.data.access));
    } catch (err) {
      logoutUser(); // fallback if refresh fails
    }
  };

  // 📥 Fetch user profile (authenticated)
  const getProfile = async () => {
    const res = await axios.get('/api/profile/');
    return res.data;
  };

  // 📤 Update user profile
  const updateProfile = async (data) => {
    const res = await axios.put('/api/profile/', data);
    return res.data;
  };

  // ⏱️ Refresh token every 4 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (localStorage.getItem('refresh_token')) refreshToken();
    }, 1000 * 60 * 4); // every 4 mins
    setLoading(false);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        registerUser,
        getProfile,
        updateProfile,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
