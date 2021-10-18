# Getting Started with Node.js
The objectives of this assignment are:
1. Installing Node.js and preparing our local environment
2. Creating our first Node.js server

In the previous lesson, we familiarized ourselves with Node.js and how it works. We also took a look at some basic Node.js code. Now, let's go ahead and create our first Node.js server - it'll be simple!

## Setup
To be able to run Node.js code, we need to make sure that we have Node.js installed on our local machine. Before we get started, please follow these installation steps depending on your OS.

### Windows
To work around some of the differences between machines, and specifically between operating systems, we recommend that all students using the Windows operating system on their computers must use a tool called Windows Subsystem for Linux (WSL). Windows Subsystem for Linux provides a Linux-based environment for interfacing with and developing on a Windows operating system. We recommend using Ubuntu, the default installed Linux distribution by WSL.
1. Follow [this page](https://docs.microsoft.com/en-us/windows/wsl/install) to install WSL.
2. Follow [this page](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) to install Node.js, nvm and npm.
3. Follow [this page](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-visual-studio-code) to install Visual Studio Code, which is the code editor we will be using.
4. Follow [this page](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git) to setup and configure Git on your local machine.

### Linux and Mac
1. Follow [this page](https://nodejs.org/en/download/) to install Node.js and npm.
2. Follow [this page](https://code.visualstudio.com/download) to install Visual Studio Code, which is the code editor we will be using.
3. Follow [this page](https://git-scm.com/downloads) to setup and configure Git on your local machine.

### Confirm Setup
We recommend using the latest stable versions of Node.js and npm. To confirm your installation, run the commands `node --version` and `npm --version` on your terminal. If you see Node.js version 14 and npm version 6, then you are good to go!

## Getting Started
After you have installed Node.js, let's get started! First and foremost, we recommend creating a dedicated space for the course assignments on your computer. This could be a folder called "Assignments" in a location on your computer that you can easily access.

1. Open your terminal and navigate to your dedicated assignments folder.
2. Then [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this assignment repo on your local machine.
3. Now open the assignment folder on VSCode.

Please note: Since this assignment repo has already been initialized for a Node.js project, we can simply clone the repo and start working on the assignment. Otherwise usually to start a Node.js project from scratch, you would create a new empty directory and run the command `npm init`. This helps create the `package.json` file which is the most important file for a Node.js project.

In the current directory, create a new file and name it `app.js`.

To create a server there are some variables that we will need to instantiate. Add these lines in the `app.js` file:
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
```
What are we doing in these lines? -- We `require` the in-built HTTP module of Node.js to create our server which will listen for incoming requests. We declare our `hostname` and `port` for our server to listen on.

Now add this piece of code to create our server in the `app.js` file:
```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Welcome to Re:Coded's Backend Bootcamp!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
```
What are we doing in these lines? -- The `http` module offers us a really powerful method called `createServer` that creates an HTTP server object. We use the `server` variable with the method `listen` to listen for incoming requests on the specific `port` and `hostname` that we have already declared before. Whenever the server receives a request, it creates a response with status code of 200 and includes the 'Content-Type' header with a value of 'text/plain' in the response. It ends the response process by returning a text value of "Welcome to Re:Coded's Backend Bootcamp!". To confirm our server is running succesfully, we are logging a message to our console. And finally we are making our server variable available to be imported in other files.

We will understand the meaning of some of these terms in further details through the upcoming lessons. To see our Node.js code functioning, let's run our server by running the following command on the terminal: `npm start`.

Once you see the message "Server running at http://127.0.0.1:3000/" on your terminal, this means that our server is up and running successfully. Now visit `http://localhost:3000` on your browser, and you will see the response message saying "Welcome to Re:Coded's Backend Bootcamp!".

Congratulations! You have just built your first Node.js server.
![Wow gif](/assets/wow.gif)

**Please note**: To stop running the server, you can press `Ctrl` + `C` on the terminal. Everytime you make any changes to the code and want to test its effects on the browser, you must stop and restart the server.

## Practice Time
Now it's time for you to work alone and create your first specific GET request. Till now our server can handle only one request with a specific response and we saw this by visiting `http://localhost:3000`, which is the root endpoint `/`. If you visit any other hypothetical server endpoint such as `http://localhost:3000/test`, you will see the same response. So let's make a separate endpoint which will be a GET request. This means that it's time for some Google searching and self-learning!

### Requirements
1. On your Node.js server, handle a GET request to the `/practice` endpoint. Your server must specifically check for 2 things: The request URL is `/practice` and the request method is `GET`.
2. Your server should return the text "Practice is done!" on visiting `http://localhost:3000/practice` on the browser.
3. Your server should continue to return the text "Welcome to Re:Coded's Backend Bootcamp!" on visiting `http://localhost:3000` on the browser.
4. The server variable should be exported from `app.js`.

### Submission
You can run the automated tests to test your code before submission.
1. Run `npm install` on the terminal to install the packages required to run submission tests.
2. Run `npm test` to test your code. If it shows all tests have passed then you're good to go.

Once you're ready to submit the assignment, follow these steps on your terminal:
1. Stage your changes to be committed: `git add .`
2. Commit your changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.

---
## References
- https://nodejs.org/en/docs/guides/getting-started-guide/
- https://www.w3schools.com/nodejs/met_http_createserver.asp