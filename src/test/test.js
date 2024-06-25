// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
