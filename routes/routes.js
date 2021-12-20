const express = require('express');

const controller = require('../controllers/controller');
const errorController = require('../controllers/error');

const router = express.Router();

// router.get('/add-product', adminController.getAddProduct);
// router.post('/add-product', adminController.postAddProduct);
router.get('/projects', controller.getProjects);

router.get('/', controller.getIndex);

module.exports = router;