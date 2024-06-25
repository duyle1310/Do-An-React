import React, { useState } from 'react';
import './Style.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:5000/user')
      .then(response => response.json())
      .then(user => {
        const userr = user.find(user1 => user1.UserName === username && user1.PassWord === password);
        if (userr) {
          // Xử lý đăng nhập thành công
          // const localUser =  window.localStorage.setItem('user', JSON.stringify(userr))
          window.location.href = '/admin';
        } else {
          setError('Tên người dùng hoặc mật khẩu không đúng.');
        }
      })
      .catch(error => {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
        setError('Đã xảy ra lỗi. Vui lòng thử lại sau.');
      }); 
  };

  
  return (
    <div className="container">
      <h1>login</h1>
      <div className="">

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;