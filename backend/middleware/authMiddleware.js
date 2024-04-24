//route protection
//this file is for the middleware function  that will be used to check if a user is authenticated or not by checking the token  in their request header
//extracts the JWT from the request header, 
//verifies it, 
//and attaches the user object to the request for authenticated routes


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
             const decoded = jwt.verify(token , process.env.JWT_SECRET)

             //get the user from the token 
             const user = await User.findByPk(decoded.id)

             //check the user's role ( if it's admin or not)

             //exclude the password field from the user object because it's hashed
             req.user = {
                id: user.id,
                //nom: user.nom,
                //email : user.email,
                role : user.role,
                //isActive: user.isActive,
             }           
             //proceed to the next middleware
             next()
        } catch (error) {
            console.log(error)
            res.status(401).json({message : 'Not authorized'})
        }
    }
    if(!token){
        res.status(401).json({message : 'Not authorized, no token !'})
    }
})

module.exports = {protect}