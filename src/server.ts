import express from "express";
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Set template engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static stuff
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Rdp home page',
    pugEnabled: true
  });
});

// This route will handle all the requests that are 
// not handled by any other route handler. In 
// this handler we will redirect the user to 
// an error page with NOT FOUND message and status
// code as 404 (HTTP status code for NOT found)
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on ** RDP ** http://${HOST}:${PORT}`);
});