#  Express Lab – Creating An Express Server (TypeScript)

##  Overview
In this lab, you will learn how to set up a basic Express server using Node.js and TypeScript, and serve static HTML pages. This lab teaches routing, middleware, project structure, and how TypeScript adds type safety and better tooling to Node.js projects.

##  Workplace Context
Express is widely used in web development to build backend APIs and serve web pages. Using TypeScript with Express helps catch errors at compile-time, provides autocomplete for req and res, and enforces better project organization — all of which are essential for professional full-stack development.

##  Learning Objectives
By the end of this lab, you should be able to:

* Set up a Node.js project with Express using TypeScript.
* Serve static HTML files from a public directory using Express routes.
* Understand middleware (express.static) for serving assets.
* Configure your server to listen on a specific port.
* Use TypeScript types (Request, Response) for safer code.
* Organize your project files (src/, dist/, public/) for maintainability.

##  Description

This lab focuses on:

* Installing and configuring Express in a Node.js + TypeScript project.
* Creating GET routes for / (home) and /contact.
* Serving HTML pages from a public directory.
* Using TypeScript types for req and res.
* Understanding static files and routing order in Express.

##  Resources

* Express Official Documentation - https://expressjs.com
* Node.js Official Documentation - https://nodejs.org/docs/latest/api/
* Path Module Documentation - https://nodejs.org/api/path.html
* TypeScript Handbook — https://www.typescriptlang.org/docs



##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Daily-Grind-Server-TypeScript.git)

2. Navigate into the project folder:

cd daily_grind_server_ts

##  Setup

1. Install dependencies:

npm install

2. Run the project:
npm run dev

##  Project Structure
daily-grind-server/
├── src/
│   └── server.ts       # Main Express server (TypeScript)
├── dist/               # Compiled JavaScript output
├── package.json        # Project metadata & dependencies
├── package-lock.json
├── node_modules/       # Installed npm packages
├── public/             # Static HTML pages
│   ├── index.html
│   └── contact.html
└── .gitignore          # Files/folders ignored by Git