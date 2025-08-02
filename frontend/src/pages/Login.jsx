import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await loginUser(formData);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Login failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
