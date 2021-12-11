const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

const errorController = require('./controllers/error');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// static path
const serve = express.static(path.join(__dirname, 'public', 'dist'));
app.use(serve);

// route
app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

// app.use((req, res, next) => {
//   res.status(404).send('404 page not found');
// });

app.use(errorController.pageNotFound);

app.listen(port);