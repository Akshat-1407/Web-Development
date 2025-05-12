## The default error handler
Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.

If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.

When an error is written, the following information is added to the response:

* The res.statusCode is set from err.status (or err.statusCode). If this value is outside the 4xx or 5xx range, it will be set to 500.
* The res.statusMessage is set according to the status code.
* The body will be the HTML of the status code message when in production environment, otherwise will be err.stack.
* Any headers specified in an err.headers object.

## Writing error handlers
Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next)

When we call next() in error handling middleware express looks for the next non-error handling middlware.
In order for next() to pass to control to the next error handling middleware function we pass err as an argument to the next like this: next(err);

**and when all the custom error handling middlewares are called then the default error handling middlware is called which shows the err stack**

> Normally when there is an error express automatically calls the next(), but in case of asynchronous error next() is not called automatically by the express. We have to call next() ourselves manually.
