import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>About Us</h2>
            <p>Welcome to XYZ Corp, where innovation meets excellence. XYZ Corp is a leading technology company specializing in artificial intelligence and machine learning solutions. Our mission is to empower businesses and individuals with cutting-edge technologies to drive growth and transformation.</p>
          </div>
          <div className="col-md-4">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <p>Email: info@xyzcorp.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
   
    </footer>
  );
}

export default Footer;
