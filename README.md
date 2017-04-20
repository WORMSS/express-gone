# express-gone

Simple express middleware for displaying GONE (410) status code 

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install express-gone --save
```

## Example

```js
app.use("/somefile", require("express-gone")());
```

```js
let gone = require("express-gone");
app.use("/somefile", gone());
```

[More examples below](#more-examples)

## API

### gone([options]);

#### options

Optional argument for changing default response.

##### options.status

The status code to send in the response. `res.status(status);` [api](https://expressjs.com/en/api.html#res.status)  
default is *410*. 

##### options.redirect

The redirect location to send in the response. `res.redirect(status, redirect);` [api](https://expressjs.com/en/api.html#res.redirect)  
default is *undefined*.  
***note:*** If redirect is used; type, render or message is ignored.  
***note:*** Most clients (browsers) do not play nicely with redirect when status code is **not 3xx**. It is recommended to use render or message instead of redirect.  

##### options.type

The content type of the response.  `res.type(type);` [api](https://expressjs.com/en/api.html#res.type)  
default is *"text"*

##### options.render

The name of the view for the response to render. `res.render(render);` [api](https://expressjs.com/en/api.html#res.render)  
default is *undefined*.
***note:*** If render is used, message is ignored.  

##### options.renderLocals

The variables to pass to the render view. `res.render(render, renderLocals);` [api](https://expressjs.com/en/api.html#res.render)  
default is *undefined*.

##### options.send

The content body of the response. `res.send(send);` [api](https://expressjs.com/en/api.html#res.send)  
default is *"Gone!"*.


## More Examples

In express `paths` can be a `single path string` **or** `express path pattern` **or** `regular expression` **or** `array with any of the previous types`  
For more information on paths see [path-examples](https://expressjs.com/en/api.html#path-examples)

##### defaults

```js
// Status Code: 410, Content-Type: "text/plain"
// body: "Gone"
app.use(paths, gone());
```

##### render

```js
// Status Code: 410, Content-Type: "text/html" (default for express is text/html)
// body: [what ever your render view looks like, with possibly the title "File Removed"]
app.use(paths, gone({ render: "error/gone", renderLocals: { title: "File Removed" } }));
```

##### message

```js
// Status Code: 410, Content-Type: "text/plain"
// body: "File has gone, not even a ghost exists"
app.use(paths, gone({ type: "text", send: "File has gone, not even a ghost exists" }));
```

##### redirect

```js
// Status Code: 301, Location: "/no-file"
app.use(paths, gone({ status: 301, redirect: "/no-file" }));
```

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-gone.svg
[npm-url]: https://npmjs.org/package/express-gone
[downloads-image]: https://img.shields.io/npm/dm/express-gone.svg
[downloads-url]: https://npmjs.org/package/express-gone
