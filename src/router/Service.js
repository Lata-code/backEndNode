const express = require('express')
const router = express.Router();
const ServiceController = require('../controller/ServiceController')

router.get('/services',ServiceController.service)

module.exports = router