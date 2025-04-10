// This app starts a server and listens on port 3000 for connections. 
// The app.get responds with “It is a get request” for requests to the root URL (/) or route. 
// For every other path, it will respond with a 404 Not Found.

const express = require('express')
const app = express() // This a function which returns an object.
const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.get('/', (req, res) => {
  res.send("It is a get request root page.")
})

// path parameters
app.get('/:username/:id', (req, res) => {
  console.log(req.params);
  let { username, id } = req.params;
  res.send(`Welcome @${username} to the webpage.`);
})

// querry strings
app.get('/search', (req, res) => {
  console.log(req.query);
  let { name, color } = req.query;
  res.send(`${name} is of ${color} color.`);
})

// app.get('/help', (req, res) => {
//   res.send("It is a get help request.")
// })

// app.get('/aboutUs', (req, res) => {
//   res.send("It is a get aboutUs request.")
// })

// app.get('*', (req, res) => {
//   res.send("It is a get request. Executed when none of the above routes are matched.")
// })



// app.post("/", (req, res) => {
//   res.send("It is a post request.");
// })

// app.use((req, res) => {  // It listenes to every request get, post, ...
//     console.log("Request Received");
//     res.send("This is the response to you request.");
// })