const asyncHandler = require('express-async-handler') // this function is used to simplify errors handling for asynchronous  functions that returns promises
const User = require('../models/userModel')

//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    try {
        const {nom, prenom, email, tele,pwd,role, isActive} = req.body;
        //check the fields
        if(!nom || !prenom ||!email ||!tele ||!pwd ||!role ||!isActive ) {
            res.status(400).json({message :   'Please fill all the field'}) 
        } 
        //check if user exists
        const userExists = await User.findOne({ where : {email: email} })
        if (userExists){
        res.status(400).json({message : 'User already exists'})      
        }

        // hashing the pwd

        //create the user 
        const user = await User.create({
            nom, 
            prenom, 
            email, tele,
            pwd, // to hash 
            role,
            isActive,
        })
         //if the user then displaying the user with the generated token 
        res.status(200).json({
            message : 'user created successfuly ',
            data : user
        })
        }catch (error) {
          res.status(501).json({message : 'Failed to create the user !'})
    }
})

module.exports  ={
    registerUser,
}