import React from 'react';
import UserStats from '../../components/UserStats';
import QuickLinks from '../../components/QuickLinks';
import RecentActivity from '../../components/RecentActivity';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Dashboard</h1>
        <p>Manage users, view activity, and control system settings</p>
      </header>

      <section className="dashboard-widgets">
        {/* User statistics like total users, active, banned */}
        <UserStats />

        {/* Fast access links to key admin pages */}
        <QuickLinks />

        {/* Log or feed of recent actions */}
        <RecentActivity />
      </section>
    </div>
  );
};

export default AdminDashboard;
