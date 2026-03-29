const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.get('/streaming', (req, res) => {
    const videoPath = path.join(__dirname, '1.mp4');
    
    // Check if the file actually exists to avoid crashing
    if (!fs.existsSync(videoPath)) {
        return res.status(404).send("Video file not found on server.");
    }

    const videoSize = fs.statSync(videoPath).size;
    const range = req.headers.range;

    // --- CASE 1: No Range Header (Direct URL access) ---
    if (!range) {
        console.log("Direct URL access detected. Sending full file...");
        const head = {
            'Content-Length': videoSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
        return; 
    }

    // --- CASE 2: Range Header exists (Streaming/Video Player) ---
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});


app.listen(3000, () => console.log('Streaming server running on port 3000'));