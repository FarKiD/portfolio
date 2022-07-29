const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.get('/projects', controller.getProjects);

router.get('/about', controller.getAbout);

router.get('/skills', controller.getSkills);

router.get('/jcards.rar', controller.getJcards);

router.get('/reader', controller.getReader);

router.get('/stopwatch', controller.getStopWatch);

router.get('/', controller.getIndex);

module.exports = router;