# Getting Started with Node.js
The objectives of this assignment are:
1. Installing Node.js and preparing our local environment
2. Creating our first Node.js server

In the last lesson, we familiarized ourselves with Node.js history and how it works. We also took a look at some basic Node.js code. Now, let's go ahead and create our first Node.js server -- it'll be simple!

To be able to run Node.js code, we need to make sure that we have Node.js installed on our local machine. Before we get started, please follow these installation steps depending on your OS.

## Windows
To work around some of the differences between machines, and specifically between operating systems, we recommend that all students whose computers come pre-installed with the Windows operating system use a tool called Windows Subsystem for Linux (WSL). Windows Subsystem for Linux provides a Linux-based environment for interfacing with and developing on a Windows operating system. We recommend using Ubuntu, the default installed Linux distribution by WSL.
1. Follow these [steps](https://docs.microsoft.com/en-us/windows/wsl/install) to install WSL.
2. Follow [this](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) to install Node.js, nvm and npm.
3. Follow [these steps](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-visual-studio-code) in to install Visual Studio Code, which is the code editor we will be using.
4. Follow [these steps](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git) to setup and configure Git on your local machine.

## Linux and Mac
1. Follow [this page](https://nodejs.org/en/download/) to install Node.js and npm.
2. Follow [these steps](https://code.visualstudio.com/download) in to install Visual Studio Code, which is the code editor we will be using.
3. Follow [these steps](https://git-scm.com/downloads) to setup and configure Git on your local machine.

### Confirm setup
We recommend using the latest stable versions of Node.js and npm. To confirm your installation, run the commands ```node --version``` and ```npm --version``` on your terminal. If you see Node.js version 14 and npm version 6, then you are good to go!

## Getting Started
After you have installed Node.js, let's get started! First and foremost, we recommend creating a dedicated space for the course assignments on your computer. This could be a folder called "Assignments" in a location on your computer that you can easily access.

1. Open your terminal and navigate to your dedicated assignments folder.
2. Then [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repo on your local machine.
3. Now open the assignment folder on VSCode.

In the current directory create a new file and name it `app.js`

To create a server there are some variables that we will need to instantiate:
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
```
We `require` the in-built HTTP module of Node.js to create our server and listen for incoming requests. We declare our hostname and port number for our server.

Now we have this following piece of code to create our server:

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Welcome to Re:Coded's Backend Bootcamp!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
The `http` module offers us a really powerful method called `createServer` that spawns a program running an HTTP server listening for incoming requests. As you can see we use the `server` variable with the method `listen` to listen for incoming requests on the specific `port` and `hostname` that we have already declared before.

Now, let's run our server by running the following command on the terminal:

```npm start```

Visit `http://localhost:3000` on your browser, and you will see a message saying "Welcome to Re:Coded's Backend Bootcamp!".

Congratulations! You have just built your first Node.js server.

![Wow gif](/assets/wow.gif)

## Practice time
Now it's time for you to work alone! and create your first GET request.

Make sure to run `npm install` to install the needed package to run the tests.

### Requirements
1. Create a GET request on your Node.js server to the `/practice` endpoint.
2. Your server should return the text `Practice is done!` on visiting `http://localhost:3000/practice` on the browser.
### Submission
1. Run `npm install` on the terminal to install the packages required to run submission tests.
2. Run `npm test` to verify your code before submission.

## References
- [Node.js getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [http.createServer()](https://www.w3schools.com/nodejs/met_http_createserver.asp)
