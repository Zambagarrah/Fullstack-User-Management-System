import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="card quick-links">
      <h2>Quick Access</h2>
      <ul>
        <li><Link to="/admin/users">Manage Users</Link></li>
        <li><Link to="/admin/settings">System Settings</Link></li>
        <li><Link to="/admin/logs">Audit Logs</Link></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
