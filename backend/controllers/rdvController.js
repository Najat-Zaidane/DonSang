const asyncHandler = require('express-async-handler')
const Rdv = require('../models/rdvModel')

//@desc set rdv
//@routes POST /api/rdvs
//@access Private
const createRDV = asyncHandler(async (req,res) =>{
    try {
        const {dateTime, status} = req.body;

    if(!dateTime || !status){
        res.status(400).json({message : 'Please fill all the field'})
    }

    //check if there's a rdv already tooken at that datetime

    const newRdv = await Rdv.create(req.body)
    res.status(200).json({
        message : 'RDV created successfuly',
        data : newRdv
    })
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Failed to create the Rdv !'})
    }

})











module.exports = {
    createRDV,
}