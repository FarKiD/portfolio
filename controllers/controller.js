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

exports.getJcards = (req, res, next) => {
  const file = path.join(__dirname, '..', 'public', 'jcards.rar');
  res.download(file);
};

exports.getReader = (req, res, next) => {
  const file = path.join(__dirname, '..', 'public', 'reader.rar');
  res.download(file);
};

exports.getStopWatch = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'stopwatch')
  });
};

exports.getIndex = (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public', 'dist')
  });
};