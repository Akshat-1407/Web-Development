const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

// A simple query

let query = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

for (let i=1; i<=100; i++) {
  data.push(createRandomUser());
}

// entering random fake user data into database.
connection.query(query, [data], (err, result) => {
    try {
        if (err) throw err;
        console.log(result); // result is an array of objects that contains the output of the query
    }
    catch(err) {
        console.log(err);
    }
});

connection.end();