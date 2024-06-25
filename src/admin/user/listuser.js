// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Giả sử chúng ta có API endpoint để lấy danh sách người dùng
    fetch('http://localhost:5000/user')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    // Giả sử chúng ta có API endpoint để xóa người dùng
    fetch(`http://localhost:5000/user/${id}`, { method: 'DELETE' })
      .then(() => setUsers(users.filter(user => user.id !== id)));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.UserName} ({user.PassWord})
            <Link to={`/admin/edit-user/${user.id}`}>Edit</Link>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
