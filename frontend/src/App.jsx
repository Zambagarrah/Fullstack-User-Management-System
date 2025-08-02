import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // 👈 Add this

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UserListPage from './pages/admin/UserListPage';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { user } = useAuth(); // 👈 Add this to access user context

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <PrivateRoute>
              {user?.is_staff ? <UserListPage /> : <Navigate to="/dashboard" />}
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
