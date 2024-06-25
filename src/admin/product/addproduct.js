import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    img: '',
    price: '',
    company: '',
    infor: '',
    incart: '',
    count: '',
    total: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/products', formData);
      if (response.status === 201) {
        alert('Sản phẩm mới đã được thêm vào cơ sở dữ liệu!');
        // Đặt logic hiển thị thông báo thành công hoặc điều hướng tại đây
      }
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
      alert('Đã xảy ra lỗi khi thêm sản phẩm. Vui lòng thử lại sau!');
      // Đặt logic hiển thị thông báo lỗi tại đây
    }
  };

  return (
    <div className='container'>
      <br/>
      <div>
        <h2>Thêm Sản Phẩm Mới</h2>
      </div>
      <form onSubmit={handleSubmit} className='container'>
        <div className='row'>
        <div className="col-6">
          <label htmlFor="id">ID:</label>
          <input className="col-12" type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="title">Tiêu đề:</label>
          <input className="col-12" type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="img">Link ảnh:</label>
          <input className="col-12" type="text" id="img" name="img" value={formData.img} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="price">Giá:</label>
          <input className="col-12" type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="company">Công ty:</label>
          <input className="col-12" type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="infor">Thông tin:</label>
          <textarea className="col-12" id="infor" name="infor" value={formData.infor} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="incart">Incart:</label>
          <input className="col-12" type="text" id="incart" name="incart" value={formData.incart} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="count">Count:</label>
          <input className="col-12" type="text" id="count" name="count" value={formData.count} onChange={handleChange} />
        </div>
        <div className="col-6">
          <label htmlFor="total">Total:</label>
          <input className="col-12" type="text" id="total" name="total" value={formData.total} onChange={handleChange} />
        </div>
        <div className="col-6">
          <button className="col-3" type="submit">Thêm</button> 
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
