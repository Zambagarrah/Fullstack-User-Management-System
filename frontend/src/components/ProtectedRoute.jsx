import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';


// roleRequired: optional prop to restrict access based on role
const ProtectedRoute = ({ children, roleRequired }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (roleRequired && user.role !== roleRequired) {
    toast.error('Access denied: Insufficient permissions');
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
