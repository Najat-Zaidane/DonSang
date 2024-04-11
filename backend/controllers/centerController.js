//this file contains the functions to manage the centers routes 

// @desc Get center
// @route  GET /api/centers
// @access Private
const getCenters = (req, res) => {
    res.status(200).json({message : 'Get centers' })
}

// @desc Set center
// @route  POST /api/centers
// @access Private
const setCenter = (req, res) => {
    res.status(200).json({message : 'Set center' })
}

// @desc Update center
// @route  Put /api/centers/:id
// @access Private
const updateCenter = (req, res) => {
    res.status(200).json({message : `Update center ${req.params.id}` })
}

// @desc Delete center
// @route  DELETE /api/centers/:id
// @access Private
const deleteCenter = (req, res) => {
    res.status(200).json({message : `Delete center ${req.params.id}`  })
}

module.exports = {
    getCenters,
    setCenter,
    updateCenter,
    deleteCenter,
}