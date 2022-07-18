const express = require('express');

const controller = require('../controllers/controller');

const router = express.Router();

router.get('/projects', controller.getProjects);

router.get('/about', controller.getAbout);

router.get('/skills', controller.getSkills);

router.get('/', controller.getIndex);

module.exports = router;