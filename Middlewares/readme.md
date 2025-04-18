# Middlewares : 
Middlewares in express are function that come into play after the server receives the request and before the response is sent to the client.

REQUEST ----------> MIDDLEWARES ----------> RESPONSE


# Using Middleware in Express

Express is a routing and middleware web framework that has minimal functionality of its own. An Express application is essentially a series of middleware function calls.

## Middleware Functions

Middleware functions are functions that have access to:
- The request object (`req`)
- The response object (`res`)
- The next middleware function in the application’s request-response cycle, commonly denoted by `next`.

### Tasks Middleware Functions Can Perform:
1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.

>**Note**: If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

## Types of Middleware in Express
An Express application can use the following types of middleware:
- **Application-level middleware**
- **Router-level middleware**
- **Error-handling middleware**
- **Built-in middleware**
- **Third-party middleware**

Middleware can be loaded with an optional mount path. A series of middleware functions can also be loaded together, creating a sub-stack of the middleware system at a mount point.

## Application-Level Middleware
Application-level middleware can be bound to an instance of the `app` object using the `app.use()` and `app.METHOD()` functions, where `METHOD` refers to an HTTP method (e.g., `GET`, `POST`, etc.) in lowercase.

### Example: Middleware Without a Mount Path
This middleware function is executed every time the app receives a request:

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```


### Example: Middleware Mounted on a Specific Path
This middleware function is mounted on the /user/:id path and is executed for any type of HTTP request made to /user/:id

```javascript
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});
```
___


##  app.use( ) :

#### app.use([path,] callback [, callback...])

* It listens to every request whether it it GET, POST, PUT, PATCH, DELETE.

* Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

#### `path`
The path for which the middleware function is invoked. This can be:
- A string representing a path.
- A path pattern.
- A regular expression pattern to match paths.
- An array of combinations of the above.

**Default**: `'/'` (root path)

#### `callback`
The callback functions invoked by the middleware. This can be:
- A single middleware function.
- A series of middleware functions (separated by commas).
- An array of middleware functions.
- A combination of all the above.

By combining these arguments effectively, you can control when and how middleware functions execute within your Express application.
___

## Creating Utility Middlewares:
Utility middleware in Express serves as a versatile tool that performs tasks to enhance the functionality, usability, or debugging capabilities of your application. Here's a breakdown of its usefulness

```javascript
// Logger
app.use((req, res, next) => {
    req.responseTime = new Date(Date.now()).toString(); // Here we are adding(changing) a property or response object.
    console.log(req.method, req.path, req.responseTime, req.hostname);
    res.send("This is a middleware.");
});
```
___

# Middleware Order in Express

If you define a middleware function *below* an `app.METHOD()` (like `app.get()`, `app.post()`, etc.) that sends a response, the middleware function will never execute. Here's why:

## Explanation

1. **Request-Response Cycle**:
   Once an Express route handler sends a response using methods like `res.send()`, `res.end()`, or `res.json()`, the request-response cycle is considered complete.

2. **Middleware Order Matters**:
   Middleware in Express is executed in the order it is defined. If a response is sent before the middleware is reached, the middleware will not execute because the request doesn't "travel further down" the middleware stack.

### Example

```javascript
const express = require('express');
const app = express();

// Route handler that sends a response
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Middleware defined after the response
app.use((req, res, next) => {
  console.log('This middleware will never execute');
  next();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

#### What Happens Here:
* When a request is made to the root path /, the route handler (app.get('/')) sends the response 'Hello, world!'.

* Since the response is already sent, the middleware defined after it will not be executed.

## Solution
If you want the middleware to be executed, it must be defined before the route handler. For example:

```javascript
app.use((req, res, next) => {
  console.log('Middleware is running before the route handler');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
```

#### What Happens Here:
* The middleware is executed first and logs the message "Middleware is running before the route handler".

* Then it passes control to the route handler using next(), and the response 'Hello, world!' is sent.

* By defining middleware in the correct order, you ensure all middleware functions execute as intended.
___

## We can also use middlewares in the app.METHOD

```javascript
// This is a middleware function
const checkToken = ("/api", (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED !")
    throw new Error("ACCESS DENIED !") // Throwing a defaut error using express.
})

app.get("/api", checkToken, (req, res) => {
    res.send("data");
})
```
___
