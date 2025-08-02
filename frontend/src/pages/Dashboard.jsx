import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  // Role-based greetings
  const getRoleBanner = (role) => {
    switch (role) {
      case 'admin':
        return { title: '🔧 Admin Control Center', subtitle: 'Manage users, roles, and system settings.' };
      case 'editor':
        return { title: '✏️ Content Hub', subtitle: 'Create and manage articles with ease.' };
      case 'user':
      default:
        return { title: '📋 User Dashboard', subtitle: 'View your profile, settings, and recent activity.' };
    }
  };

  const { title, subtitle } = getRoleBanner(user?.role);

  return (
    <div className="container mt-5">
      <div className="p-4 mb-4 bg-light border rounded text-center">
        <h2 className="mb-2">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>

      {/* Main dashboard content */}
      <div className="row">
        <div className="col-md-6">
          <h4>👤 Profile Overview</h4>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>
        <div className="col-md-6">
          <h4>🛠️ Quick Actions</h4>
          <ul>
            <li>Update Profile</li>
            <li>Change Password</li>
            <li>Log Activity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
