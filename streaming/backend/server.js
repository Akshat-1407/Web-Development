const express = require('express');
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.get("/streaming", function (req, res) {
    const videoStreamInstance = fs.createReadStream("vid.mp4");
    res.writeHead(200, {
        "Content-Type": "video/mp4"
    })
    videoStreamInstance.pipe(res);
})

app.get("/rangeStreaming", function (req, res) {

    // It is provided by the HTML5 video player by default and is used to get the range form the request header 
    const range = req.headers.range;
    if (range) {

    } 
    else {
        req.status(400).json({
            message: "Invalid Request"
        })
    }
})

app.listen(3000, function () {
    console.log("Server is running at port 3000");
})