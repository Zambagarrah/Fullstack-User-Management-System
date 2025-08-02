import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success('Registered and logged in successfully!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Registration failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3 bg-light p-4 rounded shadow">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="text" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <button className='btn btn-primary'>Register</button>
      </form>

    </div>
  );
};

export default Register;
