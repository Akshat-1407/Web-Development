const express = require('express');
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());


// --- CASE 1: No Range Header (Direct URL access) ---
app.get("/streaming", function (req, res) {
    const videoStreamInstance = fs.createReadStream("vid.mp4");
    res.writeHead(200, {
        "Content-Type": "video/mp4"
    })
    videoStreamInstance.pipe(res);
})


// --- CASE 2: Range Header exists (Streaming/Video Player) ---
app.get("/rangeStreaming", function (req, res) {

    // It is provided by the HTML5 video player by default 
    // and is used to get the range form the request header 
    const range = req.headers.range;
    if (range) {
        const stat = fs.statSync("vid.mp4");
        const fileSize = stat.size;

        const parts = range.replace(/bytes=/, "").split("-");
        const start = Number(parts[0]);
        const end = parts[1] ? Number(parts[1]) : fileSize - 1;

        const chunkSize = 2**20 // 1MB

        const headers = {
            "Content-Type": "video/mp4",
            "Content-Length": chunkSize,
            "Accept-Ranges": "bytes",
            "Content-Range": `bytes ${start}-${end}/${fileSize}`
        };

        res.writeHead(206, headers);

        const videoStream = fs.createReadStream("vid.mp4", { start, end });
        videoStream.pipe(res);
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