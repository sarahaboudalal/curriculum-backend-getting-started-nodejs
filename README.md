# Getting started with Node.js
The objectives of this lesson are:
1. Installing Node.js
2. Creating our first Node.js server

In the last module, we familiarized ourselves with Node.js history and how it works. Now, let's go ahead and create our first Node.js server -- it'll be simple!

To be able to run Node.js code, we need to make sure that we have Node.js installed on our local machine. Before we get started, please first follow these installation steps depending on your OS.

## Windows
1. Please follow these [steps](https://docs.microsoft.com/en-us/windows/wsl/install) to download WSL
2. Follow [this](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) to install Node.js

## Linux and Mac
1. [Node.js Installation](https://nodejs.org/en/download/)

## Getting started
After you have installed Node.js let's get started!

In the current directory create a new file and name it `app.js`

To create a server there are some variables that we will need to instantiate:
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
  res.end('Welcome to Re:Coded's backend Bootcamp!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
The `http` module offers us a really powerful method called `createServer` which spawns a program running an HTTP server that listens for incoming requests. As you can see we use the `server` variable later on with the method `listen` to listen for incoming requests with specific `port` and `hostname` that we have already declared before.

Now, let's test our server by running the following command:

`node app.js`

Visit `http://localhost:3000`, and you will see a message saying "Welcome to Re:Coded's backend Bootcamp!".

Congratulations you have just built your first Node.js server!

![Wow gif](/assets/wow.gif)

## References
- [Node.js getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [http.createServer()](https://www.w3schools.com/nodejs/met_http_createserver.asp)
