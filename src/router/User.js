const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const { required } = require('../validator/authValidation');
const validation = require('../validator/authValidation');
const validate = require('../middleware/authMeddleware');

router.post('/register',validate(validation.signupSchema),UserController.register)
router.post('/login',validate(validation.signinSchema),UserController.login)

router.get('/',UserController.allUsers)


//  router.route('/register').get(authController.auth).post().patch().delete()  /** this is another way of routing i.e. chaing routing  */

module.exports = router