# Getting started with Node.js
The objectives of this lesson are:
1. Installing Node.js
2. Creating our first Node.js server

In the last module we got to know more about Node.js history and how it works, now let's go ahead and create our first Node.js server it's very simple!

To be able to run Node.js code we need to make sure that we have Node.js installed on our local machine so please first follow these installation steps depending on your OS before we get started.

[Node.js Installtion](https://nodejs.org/en/download/)

After you have installed Node.js let's get started!

In the current directory create a new file and call it `app.js`

To create a server there are some variables that we will need to create:
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
```
We `require` the HTTP module that we will use to listen for incoming requests, we declare our hostname variable and the port number that we will use.

Following up we have this piece of code:

```
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Re:Coded's backend bootcamp!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
Now the HTTP module offers us a really strong method called `createServer` which turns your computer into an HTTP server that listens for incoming requests, as you can see we use the `server` variable later on with the method `listen` to listen for incoming requests with specific `port` and `hostname` which we have already declared before.

Now, lets test our server by running the following command:

`node app.js`

Visit `http://localhost:3000` and you will see a message saying "Welcome to Re:Coded's backend Bootcamp!"