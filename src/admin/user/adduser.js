import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    id: '',
    UserName: '',
    PassWord: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', formData);
      if (response.status === 201) {
        alert('Người dùng mới đã được tạo:');
        // Xử lý thành công, có thể điều hướng tới một trang khác hoặc hiển thị thông báo thành công
      } else {
        alert('Lỗi khi tạo người dùng:');
        // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
      }
    } catch (error) {
      alert('Lỗi khi gửi yêu cầu:');
      console.error(error);
      // Xử lý lỗi, có thể hiển thị thông báo lỗi cho người dùng
    }
  };

  return (
    <div className='container'>
      <br/>
      <div>
        <h2>Đăng Ký Người Dùng</h2>
      </div>
      <form onSubmit={handleSubmit} className='row'>
        <div className="col-6">
          <label htmlFor="id">ID:</label>
          <input className="col-12" type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="username">Tên người dùng:</label>
          <input className="col-12" type="text" id="username" name="UserName" value={formData.UserName} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="password">Mật khẩu:</label>
          <input className="col-12" type="password" id="password" name="PassWord" value={formData.PassWord} onChange={handleChange} />
        </div>
        <div className="col-6">
          <button className="col-3" type="submit">Gửi</button> 
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
