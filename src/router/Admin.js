const express = require('express');
const router = express.Router()
const AdminController = require('../controller/AdminController')
const tokenVerifyMiddleware = require('../middleware/tokenVerifyMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('/users',tokenVerifyMiddleware,adminMiddleware,AdminController.getUsers)
router.delete('/user/:id',tokenVerifyMiddleware,adminMiddleware,AdminController.deleteUserById)
router.get('/user/:id',tokenVerifyMiddleware,adminMiddleware,AdminController.getUserById)
router.patch('/user/update/:id',tokenVerifyMiddleware,adminMiddleware,AdminController.updateUserById)


router.get('/contacts',tokenVerifyMiddleware,adminMiddleware,AdminController.getContacts)
router.delete('/dalete/contacts/:id',tokenVerifyMiddleware,adminMiddleware,AdminController.deleteContacts)



module.exports = router