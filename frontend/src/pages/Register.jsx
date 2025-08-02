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
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" className="form-control mb-2" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control mb-2" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-2" value={formData.password} onChange={handleChange} required />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
