const asyncHandler = require('express-async-handler')
const Rdv = require('../models/rdvModel')

//NOTE : both createRDV and updtaeRDV, while testing them in postman, should use centerId , creneauId and userId already existing 
//@desc set rdv
//@routes POST /api/rdvs
//@access Private
const createRDV = asyncHandler(async (req,res) =>{
    try {
        const {date, status,creneauId, centerId} = req.body; // to re see ( creneauId)

    if(!date || !status || !creneauId || !centerId){
        res.status(400).json({message : 'Please fill all the field'})
    }

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

//getting all rdv may be for both user (so he can get all of his rdv) and admin 

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

// //@desc Get rdv by ID
// //@route GET /api/rdvs/:id
// //@access Private 
// const getRDVByID = asyncHandler (async (req,res)=>{
// try {
//     const rdv = await Rdv.findByPk(req.params.id)
//     if(!rdv){
//         res.status(404).json({message : "RDV not Found, please check the id passed !"})
//     }else {
//         res.status(200).json(rdv)
//     }
// } catch (error) {
//     res.status(500).json({message : "Failed to fetch the rdv ! "})
// }
// })

//@desc Update rdv 
//@route Put /api/rdvs/:id
//@access Private 

const  updateRDV = asyncHandler(async (req , res )=> {
    try {
        const rdvInitial = await Rdv.findByPk(req.params.id);
        if(rdvInitial) {
        const {date, status,creneauId, centerId} = req.body;
        const [updatedRowsCount] = await Rdv.update({date, status,creneauId, centerId } ,{
            where : {id : req.params.id}
        })

        if(updatedRowsCount === 0 ){
            res.status(404).json({message : "Please fill the fields ( date, status,creneauId, centerId ) to update"})
        } else {
            const rdv = await Rdv.findByPk(req.params.id)
            res.status(200).json({message : `Update center ${req.params.id} successfuly`, data: rdv})
        }
    } else {
        res.status(404).json({message : ' RDV not found, please check the id passed !'})
    }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update rdv' });
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
        res.status(404).json({message : "RDV not found, please check the id passed !"})
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