import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-4">
      <h2>Welcome, {user?.username}</h2>
      <p>This is your private dashboard.</p>
    </div>
  );
};

export default Dashboard;
