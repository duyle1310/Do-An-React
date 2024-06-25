// src/components/Aboutus.js

import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillGooglePlusSquare, AiFillMail } from "react-icons/ai";
import './style.css'



const AboutUs = () => {
  return (
    <>
      <div class="image-aboutus-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="lg-text">About Us</h1>
              <p class="image-aboutus-para">Cửa hàng chuẩn toàn cầu</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bread-bar">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-8">
              <ol class="breadcrumb">

  
              </ol>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-4">
            </div>
          </div>
        </div>
      </div>
      <div class="aboutus-secktion paddingTB60">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="strong">Who we are and<br />what we do</h1>
              <p class="lead">This is the world's leading portal for<br />easy and quick </p>
            </div>
            <div class="col-md-6">
              <p>Có thể thấy, những sản phẩm mang thương hiệu Apple dù có giá khá cao nhưng vẫn được người sử dụng yêu thích vì chất lượng vượt trội. Nhận thấy nhu cầu sử dụng hàng “Táo Khuyết” rất nhiều, nhiều nơi đã sản xuất hàng nhái, thu gom hàng cũ về sửa chữa, làm mới rồi bán ra thị trường với giá rẻ. Công nghệ lắp ráp vô cùng tinh vi khiến người dùng khó lòng phân biệt được. Những sản phẩm kém chất lượng này sau thời gian ngắn sử dụng thường bị lỗi, lại không được hưởng chính sách bảo hành toàn cầu của Apple, bán lại thì giá rất thấp.</p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="container team-sektion paddingTB60">
        <div class="row">
          <div class="site-heading text-center">
            <h3>Our Team</h3>
           
          </div>
        </div>
        <div class="row center">
          <div class="col-md-4 team-box">
            <div class="team-img thumbnail">
              <img src={require('../asset/Images/11.jpg')} />
              <div class="team-content">
                <h3>Le Nguyen Khanh Duy</h3>
                <div class="border-team"></div>
              
                <div class="social-icons">
                  <a href=""><AiFillFacebook className='social-item'/></a>
                  <a href=""><AiFillTwitterSquare /></a>
                  <a href=""><AiFillGooglePlusSquare /></a>
                  <a href=""><AiFillMail /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 team-box">
            <div class="team-img thumbnail">
            <img src={require('../asset/Images/10.jpg')} />
              <div class="team-content">
                <h3>Nguyen Pham Nhu Y</h3>
                <div class="border-team"></div>
               
                <div class="social-icons">
                  <a href=""><AiFillFacebook /></a>
                  <a href=""><AiFillTwitterSquare /></a>
                  <a href=""><AiFillGooglePlusSquare /></a>
                  <a href=""><AiFillMail /></a>
                </div>
              </div>
            </div>
          </div>
        

        </div>
      </div>
      <div class="cta-sektion cta-padding35">
        <div class="container">
          <div class="row">
         
       
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
