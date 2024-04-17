//this file contains the functions to manage the centers routes 

const asyncHandler = require('express-async-handler') // this function is used to simplify errors handling for asynchronous  functions that returns promises
const Center = require('../models/centerModel');
const { where } = require('sequelize');

// @desc Set center
// @route  POST /api/centers
// @access Private
const setCenter = asyncHandler (async (req, res) => {
    try {
        const { nom, adresse, email } = req.body;
        const center = await Center.create({ nom, adresse, email });
        res.status(200).json(center)
    } catch (error) {
        res.status(500).json({message : "Failed to create a user ! "})
    }
   
} ) 

//get all centers 
// @desc Get center
// @route  GET /api/centers
// @access Private
const getCenters = asyncHandler (async (req, res) => {
    try {
        const  centers = await Center.findAll()
        res.status(200).json(centers)
    } catch (error) {
        res.status(500).json({message : "Failed to get the users"})
    }   
})

//get center by Id
//@desc Get center by id
//@route GET /api/centers/:id
//@access Private
const  getCenterById =asyncHandler( async (req ,res) =>{
    try {
        const center = await Center.findByPk(req.params.id);
        if(!center){
            res.status(404).json({message : "Center not Found"})
        } else {
            res.status(200).json(center)
        }
    } catch (error) {
        res.status(500).json({message : "Failed to fetch the user ! "})
    }
} )

// @desc Update center
// @route  Put /api/centers/:id
// @access Private
const updateCenter = asyncHandler (async (req, res) => {
    try {
        const { nom, adresse, email } = req.body;
        const [updatedRowsCount] = await Center.update({ nom, adresse, email } ,{
            where : {id : req.params.id}
        })

        if(updatedRowsCount === 0 ){
            res.status(404).json({message : "Please fill the fields ( nom, email , adresse ) to update"})
        } else {
            const center = await Center.findByPk(req.params.id)
            res.status(200).json({message : `Update center ${req.params.id}`, data: center})
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update center' });
    }
   // res.status(200).json({message : `Update center ${req.params.id}` })
} ) 

// @desc Delete center
// @route  DELETE /api/centers/:id
// @access Private
const deleteCenter = asyncHandler ( async (req, res) => {
    try {
        const deletedRowsCount = await Center.destroy({
            where : {id : req.params.id}
        })
        if(deletedRowsCount === 0 ){
            res.status(404).json({message : "Center not found"})
        } else {
            res.status(200).json({message : `Delete center ${req.params.id} successfuly` })
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete center.' });
    }
   
} ) 

module.exports = {
    getCenters,
    setCenter,
    getCenterById,
    updateCenter,
    deleteCenter,   
}