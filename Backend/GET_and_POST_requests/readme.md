# GET and POST requests

## GET request -
* It is used to `get some response`.
* Data sent in `query strings`.
* Data that could be sent is `limited`.
* Data is sent in `string format`.
* Data which is sent is `visible in url`.

## POST request - 
* Used to `post something `(for create/ write/ update).
* Data is sent via `request body` (any type of data).
* Data which is sent is `not visible in url`.

### KEY DIFFERENCES - 

| Feature              | GET                            | POST                           |
|----------------------|--------------------------------|--------------------------------|
| **Purpose**           | Retrieve data                 | Send data (create/update)      |
| **Data Location**     | URL (query string)             | Request body                  |
| **Visibility**        | Visible in the URL            | Hidden (in the body)          |
| **Idempotent**        | Yes                            | No                             |
| **Caching**           | Yes                            | No                             |
| **Use Case**          | Fetching data (e.g., search)   | Submitting forms, creating resources |

## Example - 

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET & POST request</title>
</head>
<body>
    <h3>This is a GET method</h3>
    <form method="get" action="http://localhost:3000/register">
        <label for="username">Enter your Username: </label>
        <input type="text" name="user" id="username">
        <br><br>
        <label for="password">Enter your Password: </label>
        <input type="password" name="pass" id="password">
        <br><br>
        <button>Submit</button>
    </form>

    <br><hr><br>

    <h3>This is a POST method</h3>
    <form method="post" action="http://localhost:3000/register">
        <label for="username">Enter your Username: </label>
        <input type="text" name="user" id="username">
        <br><br>
        <label for="password">Enter your Password: </label>
        <input type="password" name="pass" id="password">
        <br><br>
        <button>Submit</button>
    </form>
</body>
</html>
```
#### index.js
```javascript
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
```
Here,

## express.urlencoded( )

It is used in Express.js (a web framework for Node.js) to handle URL-encoded data in incoming HTTP requests, such as form submissions.

```javascript
    app.use(express.urlencoded({ extended: true }));
```

*   `express.urlencoded()`: This is a middleware function in Express used to parse the data in `application/x-www-form-urlencoded` format. This is typically used for processing data submitted via HTML forms, especially when using the POST method.

*   `extended`: The `extended` option controls how the URL-encoded data is parsed:

    *   `extended: true`: Allows for more complex data types (such as objects or arrays) to be encoded and parsed properly. It uses the `qs` library to parse the data.
    *   `extended: false`: Uses the built-in `querystring` library to parse data, which only supports simple key-value pairs (no nested objects or arrays).

#### Why use this middleware?

When you use the `express.urlencoded()` middleware, it tells Express to automatically parse incoming URL-encoded data and populate `req.body` with the parsed data. Without it, `req.body` would be `undefined` for URL-encoded data.

___
## app.use(express.json( ))

`app.use(express.json());` is a line of code commonly used in Express.js (a Node.js web application framework) to enable your application to parse incoming requests with JSON payloads.

Here's a breakdown:

*   `app`: This refers to your Express application instance. You typically create it like this: `const app = express();`

*   `use()`: This is a method in Express that mounts middleware functions at a specified path. In this case, no path is specified, so the middleware is executed for every incoming request.

*   `express.json()`: This is a built-in middleware function in Express that parses incoming requests with JSON payloads and makes the parsed data available in `req.body`.

**What does it do?**

When a client (like a web browser or another server) sends a request to your Express server with a `Content-Type` header set to `application/json` (which indicates a JSON payload), `express.json()` does the following:

1.  It reads the raw request body stream.
2.  It parses the JSON data from the stream into a JavaScript object.
3.  It adds the parsed object to the `req.body` property of the request object (`req`).

**Why is it necessary?**

Without `express.json()`, the `req.body` property would be `undefined` for requests with JSON payloads. This means you wouldn't be able to access the data sent by the client in your route handlers.

**Example:**

Let's say a client sends the following JSON payload in a POST request:

```json
{
  "name": "John Doe",
  "age": 30
}
```

With app.use(express.json( )); in your Express app, you can access this data in a route handler like this:

```javaScript

app.post('/users', (req, res) => {
  console.log(req.body); // Output: { name: 'John Doe', age: 30 }
  const name = req.body.name; // Accessing individual properties
  const age = req.body.age;
  res.send(`User ${name} created with age ${age}`);
});
```
