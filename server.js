const path = require('path');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/routes');
const errorController = require('./controllers/error');

app.set('views', path.join(__dirname, 'public', 'dist'));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

// static path
const root = path.join(__dirname, 'public', 'dist');
const serve = express.static(root);
app.use(serve);

// routes
app.use(routes);

app.use(errorController.pageNotFound);

app.listen(port);