import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const title = 'Home';
class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                
            <Helmet>
                <title>Home</title>
            </Helmet>
                {/* Carousel */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/dandau-2880-800--1--1920x533.png" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/AW-SE-DD-2880-800-1920x533.png" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2024/04/banner/AirPods-Pro-2-2880-800-1920x533.png" className="d-block w-100" alt="poster"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Carousel */}
                <div className="py-5">
                    <div className="container">
                        {/* function Title diolah di components/Title.js */}
                        <Title name="our" title="products"/>
                        <div className="row justify-content-center products-container">

                            {/* <ProductConsumer> mengambil/menjalankan data dari Context.js */}
                            <ProductConsumer>
                                {/* =>{} itu shorthand function jangan katro deh */}
                                {value => {
                                    // map adalah looping function, sedangkan product adalah inisialisasi dari products yg dikirim kan dari Context.js
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <div>
            //     <Product/>
            // </div>
        );
    }
}

export default ProductList;