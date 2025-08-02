import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // optional, but nice for theme styling


const UserListPage = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.is_staff) {
      axiosInstance.get('users/')
        .then(res => setUsers(res.data))
        .catch(err => toast.error('Failed to fetch users'))
        .finally(() => setLoading(false));
    }
  }, []);


  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`users/${id}/delete/`);
      setUsers(prev => prev.filter(u => u.id !== id));
      toast.success('User deleted');
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin: User Management</h2>

      {loading ? (
        <Skeleton height={40} count={5} />
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th><th>Username</th><th>Email</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(u.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserListPage;
