const asyncHandler = require('express-async-handler') // this function is used to simplify errors handling for asynchronous  functions that returns promises
const User = require('../models/userModel')

//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler( async (req,res) => {
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
          res.status(500).json({message : 'Failed to create the user !'})
    }
})

//@desc Authenticate user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler( async (req,res) => {
    try {
        const {email , pwd} = req.body;
        //check the fields
        if( !email || !pwd ){
            res.status(400).json({message:'please provide an email and a password'});
        }
        //checking the email
        const user = await User.findOne({where : {email : email}})
        if(user && ( await compare(pwd, user.pwd))){
            res.status(200).json({
                message: 'user logged in successfuly',
                data : {
                    
                }
            })
        }
    } catch (error) {
        
    }
})




// // protect this route 
// //@desc get all the users for admin profit
// //@route GET /api/users
// //@access Private
// const getUsers = asyncHandler( async (req,res) => { 
//     try {
//         const users = await User.findAll()
//         res.status(200).json({message : 'Successfully got all users', data : users})
//     } catch (error) {
//         res.status(500).json({message : 'Failed to fetch the users ! '})
//     }
// }) 

// //@desc get user data
// //@route GET /api/users/me
// //@access private
// const getMe = asyncHandler( async (req, res) => {
//     try {
//       res.status(200).json(user)  
//     } catch (error) {
        
//     }
// })

module.exports  ={
    registerUser,
    getUsers,
    loginUser,
}