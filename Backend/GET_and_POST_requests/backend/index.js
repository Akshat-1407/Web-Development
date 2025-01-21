const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`Hello, ${user}. This is a GET request.`);
})

app.post("/register", (req, res) => {
    let { user, pass } = req.body;
    res.send(`Hello, ${user}. This is a POST request.`);
})

app.listen(port, () => {
    console.log(`You are listening to port ${port}`);
})