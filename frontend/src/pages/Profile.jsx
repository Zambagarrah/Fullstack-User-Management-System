import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { getProfile, updateProfile } = useAuth();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getProfile();
        setUserData({ ...data, password: '' });
      } catch (err) {
        toast.error('Failed to fetch profile');
      }
    };
    fetchUser();
  }, []);

  const handleChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const updated = await updateProfile(userData);
      toast.success('Profile updated!');
      setUserData({ ...updated, password: '' });
    } catch (err) {
      toast.error('Update failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" disabled className="form-control mb-2" value={userData.username} />
        <input type="email" name="email" className="form-control mb-2" value={userData.email} onChange={handleChange} />
        <input type="password" name="password" className="form-control mb-2" placeholder="New Password" value={userData.password} onChange={handleChange} />
        <button className="btn btn-warning">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
