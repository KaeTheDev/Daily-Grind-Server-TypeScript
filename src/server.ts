// 1. Import the express library
import express, { Request, Response } from 'express';

// Node.js 'path' module
import path from 'path';

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req: Request, res: Response) => {
  // Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});