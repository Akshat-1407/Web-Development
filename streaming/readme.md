# Build and Run commands

> Build Commands
```bash
    cd frontend
    npm i

    cd backend
    npm i
```

> Start the Frontend
```bash
    cd frontend
    npm run dev
```

> Start the Backend
```bash
    cd backend
    node server.js
```

> Note - We need to run start the server for both the frontend and the backend to run the application.

---

Readable Stream: File location that you read in chunks. Ex - Request a file.
Writeable Stream: File location that you write in chunks. 

The Streaming will not start unless both the streams are connected -> done using function called pipe

req and res in node support streams.
by default req - > readable stream
            res => writeable stream.

    // request , response -> streams 
    // request -> readble stream 
    // response -> writable stream

## Streaming with Range

* **Range:** A Part of complete file that has a strating point and ending point.
* **Chunk:** It is a part of a range -> packet of data that is to be streamed.
* **Buffering:** It is the time taken to get all the chunks of a range.

> By Default these things are handled by the **HTML5 video player**: 
    * Sending the Range
    * Seeking
    * Buffering
    * Pause or Offline


range: it is handled by HTML5 video player.
content-length: chunk-size
content-type: media-format (video/mp4)
content-range: what is the range of the chunk you are getting
accept-range: bytes