const express = require('express');
const app = express();
const port = 3000;

/* app.set('view engine', 'ejs'); */

// static path
const serve = express.static('public/dist');
app.use(serve);

// route
app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

app.use((req, res, next) => {
  res.status(404).send('404 page not found');
});

app.listen(port);