import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger mb-3">🚫 Access Denied</h1>
      <p className="lead">
        You don't have the necessary permissions to view this page.
      </p>
      <p className="text-muted">
        If you believe this is a mistake, please contact your administrator.
      </p>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/" className="btn btn-outline-primary">🏠 Go Home</Link>
        <Link to="/login" className="btn btn-primary">🔐 Login</Link>
      </div>
    </div>
  );
};

export default Unauthorized;
