//here we gonna have 3 routes : creating a user(Register) , Log in and get user infos

const express = require('express')
const router = express.Router()
const {registerUser, getUsers, loginUser, getMe} = require('../controllers/userController')
const {protect}  = require('../middleware/authMiddleware')


router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect, getMe)

//router.route('/admin').get(getUsers)

module.exports = router