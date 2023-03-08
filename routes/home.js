const express = require('express');
const router = express.Router();
const accessHomeControllers = require('../controllers/home');

router.get('/', accessHomeControllers.accessHome);

module.exports = router;
