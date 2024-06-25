const mysql = require('mysql2')
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = mysql.createPool({
     host: 'localhost', // host name
     user: 'root', // user name
     password: "", // password
     database: "datadt" // database name
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    connectDB.query(sqlSelect, (err, result) => {
      res.json(result);
    });
  });
  app.post("/products", (req, res) => {
    const { id, title, img, price, company, infor, incart, count, total } = req.body;
    const sqlInsert = "INSERT INTO products (id, title, img, price, company, infor, incart, count, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connectDB.query(sqlInsert, [id, title, img, price, company, infor, incart, count, total], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json({ id: result.insertId, title, img, price, company, infor, incart, count, total });
      }
    });
  });
  

  app.get("/user", (req, res) => {
    const sqlSelect = "SELECT * FROM user";
    connectDB.query(sqlSelect, (err, result) => {
      res.json(result);
    });
  });
// Route để thêm người dùng mới
app.post('/user', (req, res) => {
  const { id, UserName, PassWord } = req.body;
  const sqlInsert = 'INSERT INTO user (id, UserName, PassWord) VALUES (?, ?, ?)';
  connectDB.query(sqlInsert, [id, UserName, PassWord], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ id: result.insertId, UserName, PassWord });
    }
  });
});


const PORT=5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
  module.exports = connectDB