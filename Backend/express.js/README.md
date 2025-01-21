## Library v/s Framework
* **Library** : 
    A library is a collection of pre-written code that can be used to perform specific tasks.
    **Example : axios**

* **Framework** :
    A framework is a set of pre-written code that provides a structure for developing software applications.
    **Example : express** 
___

## Express
It is A node.js web application framework that helps us to make web applications. It is used for server side programming. 

Major uses of express are : - 

* Listen for incomming requests.
* Parse the request into valid javascript code.
* Match response with routes.
* Send suitable response.
___

### Ports :
    They are the logical endpoints of a network connection that is used to exchange information between web server and web client.
___

## Routing :
It is the process of selecting a path for traffic in a network or between or accross multiple networks. 

### 1. **app.listen( ) :**
This method is used to start the server and make it listen for incoming connections on a specified port.

#### Syntax - 
```javascript
    app.listen(port, [hostname], [backlog], [callback])
```
Parameters :

* port: The port number on which the server will listen (e.g., 3000).
* hostname (optional): The host name (default is localhost).
* backlog (optional): The maximum number of pending connections (default is dependent on the OS).
* callback (optional): A function that is called once the server starts listening.

Example -
```javascript
    const express = require('express');
    const app = express();

    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
```

### 2. **app.use( ) :**
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.


### 3. **app.get( ) :**
This method is used to define a route that handles HTTP GET requests. It responds to requests made to a specific endpoint.

#### Syntax - 
    app.get(path, callback)

Example -
```javascript
    app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
    });

    app.get('/about', (req, res) => {
    res.send('About us page');
    });
```

### 4. app.post()
This method is used to define a route that handles HTTP POST requests. It's commonly used for handling form submissions or data sent in the request body.

#### Syntax:
    app.post(path, callback)

Example - 
```javascript
    app.post('/submit-form', (req, res) => {
    // Assuming body-parser is used to parse JSON or form data
    console.log(req.body); // Access submitted data
    res.send('Form submitted successfully!');
    });
```
___

## Path Parameters -
Path parameteters are used to give variables to the route or path which the user wants to take.

Example - 
```javascript
    app.get('/:username/:id', (req, res) => {
    console.log(req.params);
    let { username, id } = req.params;
    res.send(`Welcome @${username} to the webpage.`);
    })
```
Here  **: /username** is a path parameter i.e. the username acts as variable and can take any value.

The value it takes is stored in **req.params** (request.parameters) in the form of an object.
___

## Querry Strings -
Querry are the parameters we pass in in our url to give some additional information.

Eg - https://www.google.com/search?q=apple&color=green

Here q=apple and color=green are called querry strings.

Example - 
```javascript
    app.get('/search', (req, res) => {
    console.log(req.query);
    let { name, color } = req.query;
    res.send(`${name} is of ${color} color.`);
    })
```
Here the querry strings that we pass are stored in **req.querry** in the form of a object key-value pair
___
