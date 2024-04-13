//this file contains the functions to manage the centers routes 

const asyncHandler = require('express-async-handler') // this function is used to simplify errors handling for asynchronous  functions that returns promises
const Center = require('../model/centerModel');

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

    const { nom, adresse, email } = req.body;

    const center = await Center.create({ nom, adresse, email });
    
    res.status(200).json(center)
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