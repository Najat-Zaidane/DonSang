//this file contains the functions to manage the centers routes 



// @desc Get center
// @route  GET /api/centers
// @access Private
const getCenters = (req, res) => {
    res.status(200).json({message : 'Get centres' })
}

// @desc Set center
// @route  SET /api/centers
// @access Private
const setCenter = (req, res) => {
    res.status(200).json({message : 'Set centres' })
}

// @desc Put center
// @route  Put /api/centers
// @access Private
const updateCenter = (req, res) => {
    res.status(200).json({message : `Update centres ${req.params.id}` })
}

// @desc Get center
// @route  GET /api/centers
// @access Private
const deleteCenter = (req, res) => {
    res.status(200).json({message : `Delete centres ${req.params.id}`  })
}


module.exports = {
    getCenters,
}