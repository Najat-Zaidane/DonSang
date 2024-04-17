const asyncHandler = require('express-async-handler')
const Creneau = require('../models/creneauModel')


//@desc Set creneau
//@routes POST /api/creneaus
//@access Private
const createCreneau = asyncHandler( async (req,res) => {
    try {
        const {startTime,endTime} = req.body
        if(!startTime || !endTime){
            res.status(401).json({message : 'Please fill the startTime and the endTime fields first ! '})
        }
     
            const creneau = await Creneau.create({startTime,endTime})
            if(creneau){
                res.status(200).json({
                    message : 'The creneau has been created successfully',  
                    data: creneau
                })
            }
       
    } catch (error) {
        res.status(500).json({message : 'Failed to create the creneau'})
    }
})


//@desc Get  all crenaux 
//@route  GET /api/creneaus
//@access Private
const  getAllCreneaux= asyncHandler( async (req, res) => {
    try {
        const  creneaux = await Creneau.findAll()
        res.status(200).json(creneaux)
    } catch (error) {
       res.status(500).json({message : 'Failed to fetch the creneaux !'}) 
    }
})

//@desc get  a single crenau by ID
//@route  GET /api/creneaus/:id
//@access Private
const  getCreneauById = asyncHandler(async (req , res)=>{
    try {
        const  creneau = await Creneau.findByPk(req.params.id)
        if(creneau){
            res.status(200).json({ 
                message : `The creneau id number ${creneau.id}   was found`,
                data: creneau
            })
        } else{
            res.status(404).json({message:'No creneau found with this id!'})
        }
        
    } catch (error) {
        res.status(500).json({message : 'Failed to fetch  the creneau!'});
    }
})

// @desc Update a creneau
// @route Put /api/creneaus/:id
// @access Private
const updateCreneau = asyncHandler(async (req,res,next)=> {
    try {
        const   creneau = await Creneau.findByPk(req.params.id);
        if(creneau) {
        const {startTime, endTime} = req.body
        const [updatedRowsCount2]  = await Creneau.update({startTime,endTime}, {
            where:{id:req.params.id}
        })

        if(updatedRowsCount2 === 0) {
            res.status(404).json({message : "Please fill the fields ( startTime, endTime) to update"})
        } else {
            res.status(200).json({
                message : 'Creneau updated successfuly', 
                data :  req.body ,
        })
        }
    } else {
        res.status(404).json({message : 'The creneau is not found, check the id passed !'})
    }
    } catch (error) {
        res.status(400).json({message:"Error updating the creneau!"})
    }
})

//@desc delete Creneau
//@route Delete /api/creneaus/:id
//@access Private
const deleteCreneau = asyncHandler( async (req,res) => {
    try {
        const  deletedCreneau = await Creneau.destroy({ where : {id : req.params.id}})
        if(deletedCreneau === 0){
            res.status(404).json({message : "Creneau not found"})
        } else {
            res.status(200).json({message : `Delete center ${req.params.id} successfuly` })
        
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete the creneau.' });
    }  
})


module.exports = {
    createCreneau,
    getAllCreneaux,
    getCreneauById,
    updateCreneau,
    deleteCreneau,
}