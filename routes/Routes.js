const express = require('express');
const homeController = require('../controllers/homeController');
const testController = require('../controllers/testController');

const router = express.Router();

//home
router.get('/', homeController.home_index);


//test
router.get('/test', testController.test_index);


module.exports = router;