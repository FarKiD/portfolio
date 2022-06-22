const path = require('path');

exports.getProjects = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};

exports.getAbout = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};

exports.getContact = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};

exports.getSkills = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};

exports.getIndex = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};