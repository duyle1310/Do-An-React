import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import PriceComponent from './formatprice';

const Listproduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
            {
                products.map((product) => (
                    <div className="card col-3" key ={product.id}>
                            <Link to="/details">
                                <div className="card-image rounded">
                                    <img src={product.img} alt="product" className="card-img-top p-5" />
                                </div>
                            </Link>
                            {/* BODY CARD */}
                            <div className="card-body">
                                <h5 className="card-title title">{product.title}</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text price">Giá bán: <PriceComponent price={product.price}/></p>
                                    <i className="fas fa-shipping-fast fa-2x text-lightgreen"></i>
                                </div>
                            </div>
                            {/* BUTTON ADD TO CART */}
                            {/* shorthand IF {inCart ? true : false} jika barang ada di cart maka true akan di disable dan tidak bisa tambah keranjang */}
                            <button className="btn cart-btn" >
                            {/* Kondisi if ELSE*/}
                            {product.inCart ? (
                                <p className="text-capitalize mb-0" disabled>{""}In Cart</p>
                            ):(
                                <span><i className="fas fa-plus-circle me-1 plus-icon"></i> Add To Cart</span>
                            )}
                            </button>
                        </div>
                ))
            }
            </div>
        </div>
    );
};

export default Listproduct;