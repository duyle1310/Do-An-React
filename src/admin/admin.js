// src/components/Admin.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UserList from './user/listuser';
import UserForm from './user/adduser';
import ProductList from './product/listproduct';
import AddProductForm from './product/addproduct';

const Admin = () => {
  return (
    <Router>
      <div className="admin-container">
        <nav>
          <ul>
          <li><Link to="/admin/product">Product List</Link></li>
            <li><Link to="/admin/add-product">Add Product</Link></li>
            <li><Link to="/admin/users">User List</Link></li>
            <li><Link to="/admin/add-user">Add User</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
          <Route path="/admin/product" component={ProductList} />
            <Route path="/admin/add-product" component={AddProductForm} />
            <Route path="/admin/users" component={UserList} />
            <Route path="/admin/add-user" component={UserForm} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Admin;
