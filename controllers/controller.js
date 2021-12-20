const path = require('path');

exports.getProjects = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};

exports.getIndex = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};