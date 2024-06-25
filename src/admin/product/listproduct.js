import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        // Đặt logic hiển thị thông báo lỗi tại đây
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
  <h2>Danh sách sản phẩm</h2>
  <table className='product-table'>
    <thead>
      <tr>
        <th>Tiêu đề</th>
        <th>Hình ảnh</th>
        <th>Giá</th>
        <th>Công ty</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>
            <img src={product.img} alt={product.title} />
          </td>
          <td>{product.price}</td>
          <td>{product.company}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ProductList;
