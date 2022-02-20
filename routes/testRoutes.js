const express = require('express');
const testController = require('../controllers/testController');

const router = express.Router();

router.get('/test', testController.test_index);

module.exports = router;