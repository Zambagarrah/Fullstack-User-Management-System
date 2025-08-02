import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">👋 Welcome to UserMgmt</h1>
      {user ? (
        <>
          <p className="lead">Hello, <strong>{user.username}</strong>! Access your dashboard below:</p>
          <Link to="/dashboard" className="btn btn-primary mt-3">
            Go to Dashboard
          </Link>
        </>
      ) : (
        <>
          <p className="lead">Manage users, explore protected routes, and demo JWT authentication.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/login" className="btn btn-success px-4">Login</Link>
            <Link to="/register" className="btn btn-outline-primary px-4">Register</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
