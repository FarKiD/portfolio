const path = require('path');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const errorController = require('./controllers/error');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// static path
const root = path.join(__dirname, 'public', 'dist');
const serve = express.static(root);
app.use(serve);

// routes
app.use('/projects', (req, res, next) => {
  res.sendFile('index.html', {root});
});

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

app.use(errorController.pageNotFound);

app.listen(port);