const express = require("express");
const app =  express();
const ExpressError = require("./expressError.js");

const port = 8080;


const checkToken = ("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED !")
    throw new ExpressError(401, "ACCESS DENIED !");
})

app.get("/api", checkToken, (req, res) => {
    res.send("data");
})



app.get("/random", (req, res) => {
    res.send("This is a random page.");
});

app.get("/err", (req, res) => {
    abcd = abcd  // This is an error.
})

app.use((err, req, res, next) => {
    let {status = 500, message} = err;  // Default status code is set to 500 in case of undefined status code.
    res.status(status).send(message);
})

// app.use((req, res) => {
//     res.status(404).send("Page not found")
// })

app.listen(port, () => {
    console.log(`You are listening to port ${port}`);
})