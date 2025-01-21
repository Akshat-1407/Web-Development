const express = require("express");
const path = require("path")
const app = express();
const port = 8080;

// Set the view engine to EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Listening to the port ${port}.`);
});

// Render the home page
app.get("/", (req, res) => {
    res.render("home.ejs"); // No need for .ejs
});

// for conditional ejs
app.get("/diceroll", (req, res) => {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    res.render("diceRoll.ejs", { diceRoll: diceRoll });
});

// simple instagram page
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/javascript")));

app.get("/insta/:username", (req, res) => {
    const database = require("./data.json");
    console.log(database);
    let { username } = req.params;
    let data = database[username];
    if(data) {
        res.render("instagram.ejs", { data });
    }
    else {
        res.render("error.ejs");
    }
});

