import React from 'react';

const RecentActivity = () => {
  const recent = [
    { action: 'User JohnDoe updated profile', time: '2 mins ago' },
    { action: 'Admin Zablon created new role', time: '15 mins ago' },
    { action: 'User JaneSmith registered', time: '1 hour ago' },
  ];

  return (
    <div className="card recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {recent.map((entry, index) => (
          <li key={index}>
            <strong>{entry.action}</strong> — <em>{entry.time}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
