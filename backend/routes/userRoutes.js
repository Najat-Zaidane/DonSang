//here we gonna have 3 routes : creating a user(Register) , Log in and get user infos

const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/userController')

router.route('/').post(registerUser)


module.exports = router