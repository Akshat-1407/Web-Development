const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const path = require("path");
const methodOverride = require("method-override");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app_data', // here comes the name of the database we are using
  password: 'Ras#server80'
});


// Home Page route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if(err) throw err;
      let count = result[0]['COUNT(*)'];
      console.log(count);
      res.render("home.ejs", { count });
  })
  }
  catch(err) {
    console.log(err);
    res.send("Some error occured");
  }
})


// Show User route
app.get("/user", (req, res) => {
  try {
    let q = `SELECT * FROM user`;
    connection.query(q, (err, result) => {
      if(err) throw err;
      res.render("show.ejs", { result });
    });
  }
  catch(err) {
    console.log(err);
    res.send("Some error occured.");
  }
});


// edit route
app.get("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  try {
    let q = `SELECT * FROM user WHERE id = '${id}'`
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  }
  catch(err) {
    console.log(err);
    res.send(err);
  }
});


// Update (DB) route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let { username: newUsername, password: formPass} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user = result[0];

      if(user.password != formPass) {
        res.send("WRONG PASSWORD");
      }
      else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`
        connection.query(q2, (err, result) => { 
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
  }
  catch(err) {
    console.log(err);
    res.send(err);
  }
});


app.listen(port, () => {
    console.log(`You are listening to port ${port}`);
});


// connection.end();