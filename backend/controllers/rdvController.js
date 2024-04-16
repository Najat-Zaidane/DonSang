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

//@desc Get rdvs
//@route GET /api/rdvs
//@access Private 
const getRDVs= asyncHandler(async (req , res)=>{
    try {
        const rdvs = await Rdv.findAll()
        res.status(200).json(rdvs) 
    } catch (error) {
        res.status(500).json({message : "Failed to get the rdvs"})
    }
})

//@desc Get rdv by ID
//@route GET /api/rdvs/:id
//@access Private 
const getRDVByID = asyncHandler (async (req,res)=>{
try {
    const rdv = await Rdv.findByPk(req.params.id)
    if(!rdv){
        res.status(404).json({message : "RDV not Found"})
    }else {
        res.status(200).json(rdv)
    }
} catch (error) {
    res.status(500).json({message : "Failed to fetch the rdv ! "})
}
})

//@desc Update rdv 
//@route Put /api/rdvs/:id
//@access Private 
const  updateRDV = asyncHandler(async (req , res , next)=> {
    try {
        const {dateTime, status} = req.body
        // //1- check if the user is owner of this task
        //  const rdv = await Rdv.findByPk(req.params.id)
        //  if(rdv.user.toString() !== req.user.id){
        //      return res.status(401).json({ message: 'You are not authorized' })
        //  } else {
        //   rdv = await rdv.update ({ dateTime, status });
        //    res.status(201).json(rdv);
        //  }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update center' });
    }
})

//@desc Delete rdv 
//@route DELETE /api/rdvs/:id
//@access Private 
const  deleteRDV = asyncHandler(async (req , res ,next )=> {
try {
    const deletedRowsCount = await Rdv.destroy({
        where : {id : req.params.id}
    })
    if(deletedRowsCount === 0 ){
        res.status(404).json({message : "RDV not found"})
    } else {
        res.status(200).json({message : `Delete RDV ${req.params.id} successfuly` })
    }
    
} catch (error) {
    res.status(500).json({ message: 'Failed to delete the rdv.' });
}
})






module.exports = {
    createRDV,
    getRDVs,
    getRDVByID,
    updateRDV,
    deleteRDV
}