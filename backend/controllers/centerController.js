//this file contains the functions to manage the centers routes 

//db
const db = require('../model/centerModel')

//Create the main Model 
const Center = db.centers

//main work 

const asyncHandler = require('express-async-handler') // this function is used to simplify errors handling for asynchronous  functions that returns promisesf

// @desc Get center
// @route  GET /api/centers
// @access Private
const getCenters = asyncHandler (async (req, res) => {
    res.status(200).json({message : 'Get centers' })
})

// @desc Set center
// @route  POST /api/centers
// @access Private
const setCenter = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message : 'Set center' })
} ) 

// @desc Update center
// @route  Put /api/centers/:id
// @access Private
const updateCenter = asyncHandler (async (req, res) => {
    res.status(200).json({message : `Update center ${req.params.id}` })
} ) 

// @desc Delete center
// @route  DELETE /api/centers/:id
// @access Private
const deleteCenter = asyncHandler ( async (req, res) => {
    res.status(200).json({message : `Delete center ${req.params.id}`  })
} ) 

module.exports = {
    getCenters,
    setCenter,
    updateCenter,
    deleteCenter,
}