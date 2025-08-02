import React from 'react';

const UserStats = () => {
  const stats = {
    totalUsers: 1324,
    activeUsers: 1120,
    bannedUsers: 45,
  };

  return (
    <div className="card user-stats">
      <h2>User Statistics</h2>
      <ul>
        <li><strong>Total Users:</strong> {stats.totalUsers}</li>
        <li><strong>Active Users:</strong> {stats.activeUsers}</li>
        <li><strong>Banned Users:</strong> {stats.bannedUsers}</li>
      </ul>
    </div>
  );
};

export default UserStats;
