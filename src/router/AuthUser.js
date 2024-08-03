const express = require('express')
const router = express.Router();
const authController = require('../controller/AuthController');
const tokenVerifyMiddleware = require('../middleware/tokenVerifyMiddleware')

router.get('/userdata',tokenVerifyMiddleware, authController.useData);

module.exports = router