//route protection
//this file is for the middleware function  that will be used to check if a user is authenticated or not by checking the token  in their request header
//if they are authenticated, it will redirect them to the dashboard
//otherwise, it will show a login form that handles user authentication.

const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler ( async (req, res , next ) =>{
    let token

    if(req.headers.authorization  && req.headers.authorization.startsWith('Bearer')) {
        try {
             //get token from the bearer space tokens from the Header of the request
             token = req.headers.authorization.split(' ')[1]

             //verify token
             const decoded = jwt.ver
        } catch (error) {
            
        }
    }
})

module.exports = {protect}