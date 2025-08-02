import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">👋 Welcome to UserMgmt</h1>
      <p className="lead">Manage users, protect routes, and control access with JWT.</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-outline-success">Register</Link>
      </div>
    </div>
  );
};

export default Home;
