# Templating

`EJS (Embedded JavaScript Templates)`

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

___
# `app.set()` in Express.js

The `app.set()` method in Express.js is used to configure various settings for your application. These settings are essentially key-value pairs stored internally by Express and can be accessed or modified as needed.

## Syntax
```javascript
app.set(name, value);
```

- **`name`**: The name of the setting.
- **`value`**: The value to assign to the setting.

## Common Use Cases for `app.set`

### 1. Set the View Engine
To specify which templating engine (e.g., EJS, Pug, Handlebars) your app should use:
```javascript
app.set('view engine', 'ejs');
```

### 2. Set the Views Directory
To set a custom directory for your template (ejs) files (default folder is `views`):
```javascript
app.set('views', path.join(__dirname, 'templates'));
```
> **Note** : If we run the server form outside the root directory i.e backend in this case it will search for views inside backend not inside the ejs directory where the server is created (index.js). Hence we need to set the view directory.

### 3. Environment Configuration
Express automatically sets the `env` setting based on the `NODE_ENV` environment variable. You can also set it manually:
```javascript
app.set('env', 'production'); // or 'development', 'test'
```

### 4. Trust Proxy
To indicate whether your app is behind a proxy, which is useful for applications hosted on services like Heroku:
```javascript
app.set('trust proxy', true);
```

### 5. Custom Settings
You can define your own custom settings:
```javascript
app.set('appName', 'My Awesome App');
console.log(app.get('appName')); // Outputs: My Awesome App
```

## Example Usage
Here’s an example demonstrating multiple uses of `app.set`:

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Setting the views directory
app.set('views', path.join(__dirname, 'views'));

// Custom application setting
app.set('appName', 'My Express App');

// Using the custom setting
console.log(`App Name: ${app.get('appName')}`);

app.get('/', (req, res) => {
    res.render('home'); // Looks in the 'views' directory for 'home.ejs'
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
___
# path.join( )
path.join() is a Node.js method from the path module. It is used to join multiple path segments into a single path, normalizing the resulting path to ensure correct separators for the operating system.

Syntax :
```javascript
    path.join([...paths])
```
___

# __dirname

In Node.js, __dirname is a global variable that represents the absolute directory path of the file where the code is being executed. It is particularly useful for constructing paths to other files or directories relative to the current file.

Example Usage :
```javascript
    const path = require('path');

    // Prints the directory name of the current file
    console.log(__dirname);

    // Example of using __dirname to build a file path
    const filePath = path.join(__dirname, 'example.txt');
    console.log(filePath);
```
___

# `res.render()` in Express.js

In Express.js, the `res.render()` method is used to render a view template using the view engine configured for your application (e.g., EJS, Pug, etc.) and send the rendered HTML as the response.

## Syntax
```javascript
res.render(view, [locals], [callback]);
```

### Parameters:
- **`view`**: The name of the view file to render (excluding the file extension). Express looks for this file in the directory specified by `app.set('views')`.
- **`locals`** (optional): An object containing variables to pass to the view template.
- **`callback`** (optional): A callback function executed after the view is rendered. Used to handle errors or inspect the result before sending it.

## Example Usage

### 1. Simple Rendering
Render an `index.ejs` file located in the `views` folder:
```javascript
app.get('/', (req, res) => {
    res.render('index');
});
```

### 2. Passing Variables to the View
Pass data to the template for dynamic rendering:
```javascript
app.get('/user', (req, res) => {
    res.render('user', { name: 'John Doe', age: 30 });
});
```

In the `user.ejs` file:
```ejs
<h1>Hello, <%= name %>!</h1>
<p>You are <%= age %> years old.</p>
```
___

# `res.redirect()` in express.js
`response.redirect()` in Express.js is a method used to perform an HTTP redirect. It sends a redirect response to the client's browser, instructing it to navigate to a different URL. This is commonly used for:

*   **Redirecting after form submissions:** After a user submits a form, you might redirect them to a confirmation page or back to the form page if there were errors.
*   **Handling authentication:** Redirecting users to a login page if they try to access protected resources.
*   **URL rewriting:** Redirecting old URLs to new ones for SEO or site restructuring.
*   **Temporary or permanent moves:** Indicating whether the redirect is temporary (302) or permanent (301).

## Syntax 
```javascript
    app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => id === post.id);
    let index = posts.indexOf(post);
    posts.splice(index, 1);
    res.redirect("http://localhost:8080/posts");
    })
```
___

# Interpolation Syntax

Interpolation refers to embedding expressions into marked up text

## Tags : 


* <% `Scriptlet` tag, for control-flow, no output

* <%_ `Whitespace Slurping` Scriptlet tag, strips all whitespace before it

* **___<%= Outputs the value into the template (HTML escaped)___**

* <%- Outputs the unescaped value into the template

* <%# Comment tag, no execution, no output

* <%% Outputs a literal '<%'

* %> Plain ending tag

* -%> Trim-mode ('newline slurp') tag, trims following newline

* _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

```
    <%  %> --> used for control flow i.e. loops, conditionals
    <%=  %> --> used of for output.
```
## For conditional ejs : 
``` javascript
app.get("/diceroll", (req, res) => {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    res.render("diceRoll.ejs", { diceRoll: diceRoll });

// diceRoll.ejs

<h1>The dice rolls: <%= diceRoll %> </h1>
<% if (diceRoll == 6) { %>
    <h4>Nice! Roll the dice again</h4>
<% } %>
});
```

## For ejs loops :
```javascript
app.get("/insta/:username", (req, res) => {
    let { username } = req.params;
    let followers = ["Adam", "Steve", "Eddy", "Thomas"];
    res.render("instagram.ejs", { username, followers });
});

// instagram.ejs

<h1>Hello to @<%= username %></h1>
<h4>Your followers are : </h4>
<% for (let follower of followers) { %>
<li> <%= follower %> </li>
<% } %>
```
# Serving Static Files 
It is used to send additional css and js files along with ejs rendering.

Syntax :
```javascript
    app.use(express.static(path.join(__dirname, "/public")));
```
> Here __`express.static()`__ is a middleware

A directory named `public` is made inside the root directory inside which the additional css and js files are stored.
___

# include( )

In EJS (Embedded JavaScript Templates), the include feature is used to include reusable partials or templates within another template. This helps you organize and reuse code, such as headers, footers, or other shared components.

Syntax :
```javascript
<%- include('path/to/file') %>
```
* The `<%-` syntax ensures that the included file's content is not __*escaped*__. If you use `<%=` instead, the output will be __*HTML-escaped*__.

* The `path/to/file` should be relative to the `views directory` or the directory configured for EJS templates in your application.

> The directory in which the file to be included is present should be inside a directory which is inside the `views directory`