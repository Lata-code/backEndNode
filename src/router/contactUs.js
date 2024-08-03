const express = require('express');
const router = express.Router();
const contactusController = require('../controller/ContactusController')
const validation = require('../validator/authValidation');
const validate = require('../middleware/authMeddleware');


router.post('/contactus',validate(validation.contactusSchema) ,contactusController);

module.exports = router;