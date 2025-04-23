const express = require("express");
const app = express();
const port = 8080;



// Basic Authentation
/*
app.use("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED !")
})

app.get("/api", (req, res) => {
    res.send("data");
})
*/

// We can also use middlewares in the app.METHOD

const checkToken = ("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED !")
    throw new Error("ACCESS DENIED !")
})

app.get("/api", checkToken, (req, res) => {
    res.send("data");
})


// 404 Error
app.use((req, res) => {
    res.status(404).send("Page not Found!")
})


app.listen(port, () => {
    console.log(`You are listening to port ${port}`);
});


