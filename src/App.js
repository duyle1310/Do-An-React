// Import Semua Component disini Seperti gambar, halaman, plugin, dan lain-lain

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Default from './components/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AboutUs from './aboutus/aboutus';
import Blogs from './Blogs/Blog';
import './css/App.css';
import Test from './test/test';
import Listproduct from './components/productlist2';
import Loginform from './Login/login';
import ContactUs from './contactus/ContactUs';
import Admin from './admin/admin';


function App() {
  // const userr =  window.localStorage.setItem('user', JSON.stringify(userr))
  return (
    
    <React.Fragment>

      {/* {
        userr ?
        <Admin/>

        :
        <>
      <Navbar/>
      
      <Switch>

        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/test" component={Test} />
        <Route path="/listproduct" component={Listproduct} />
        <Route path="/login" component={Loginform} />
        <Route path="/contactUs" component={ContactUs} />



        

        <Route component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
        </>
      } */}
      <Navbar/>
      
      <Switch>

        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/test" component={Test} />
        <Route path="/listproduct" component={Listproduct} />
        <Route path="/login" component={Loginform} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/admin" component={Admin} />



        

        <Route component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
      
    </React.Fragment>
  );
}

export default App;
