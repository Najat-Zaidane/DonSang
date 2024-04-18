const asyncHandler = require('express-async-handler')
const CentCren = require('../models/centerCreneauModel')
const Center = require('../models/centerModel')
const Creneau = require('../models/creneauModel')
const { where } = require('sequelize')

//@desc set an association 
//@routes POST /api/centCren
//@access Private (for admin)
const createAssoc = asyncHandler( async (req, res) => {
    const {centerId , creneauId } = req.body

    if(!centerId || !creneauId ){
        res.status(401).json({message: 'Missing fields :centerId and creneauId '})
    }else {
    const center = await Center.findOne({where : {id : req.body.centerId}})
    const creneau = await Creneau.findOne({where : {id : req.body.creneauId}})

    if(center && creneau){
    const  centCren = CentCren.findOne({where : {centerId : req.body.centerId , creneauId: req.body.creneauId} })
    if(!centCren) {
    const NEWcentcren = await CentCren.create({centerId , creneauId })
    res.status(200).json({
        message : 'center and creneau associated successfuly',
        data : NEWcentcren
    })
    } else {
        res.status(409).json({message:'This center-creneau association already exists'});
    }
    } else {
        res.status(401).json({message:"Center or creneau not found, check the ids given"})
    }
    }
})

//recuperation des crenos associe à un centre par son id 

//@desc Get creneaux ( with details ) associated to a center by it's id
//@route GET /api/centCren/:id
//@access Private
const getCrenByCenterId = asyncHandler ( async (req,res) =>{
    const center = await Center.findOne({where : {id: req.params.id}})
    if(!center){
        res.status(401).json({message  : "No center with this ID"})
    } else {
        const crenos = await CentCren.findAll({where : {centerId : req.params.id}})
        const crenosId = crenos.map(association => association.creneauId)
        const  crenosDetails = await Creneau.findAll({where:{id : crenosId}})
        res.status(200).json({
            message : `The number of creneaux associated with this center is ${crenos.length} and their ids are : ${crenos.map(association => association.creneauId)} `,
            //data    : crenos.map(association => association.creneauId)
            data : crenosDetails
        })
    }
})

// //Mise a jour des associations via le centreId ( may add the inverse  later on )
//may add the update function the same way as the deleted function 

//1-mise e jour de creneau  d'un centre 
//@desc  Update one creneau - center association
//@route  PUT /api/centCren/:id
//@access Private
const updateAssocByCenterId = asyncHandler( async (req , res )=>{
    const {centerId, creneauId} = req.body
    if( !centerId || !creneauId ){
        res.status(401).json({message  : "Missing fields :centerId and creneauId "})
    } else {
        const center = await Center.findOne({where : {id : req.body.centerId}})
        const creneau = await Creneau.findOne({where : {id : req.body.creneauId}})
        if(center && creneau){
          const UpdatedAssoc =  await CentCren.update({ where: {centerId : req.body.centerId , creneauId : req.body.creneauId}});
          //const Associations = await CentCren.findAll()
            res.status(200).json({
                message : 'Association updated successfuly , the new asssocations are : ',
                data: UpdatedAssoc
            })
    }else {
        res.status(404).json('Center or creneau not found, check the ids given')
    }
    }      
     
})

// supression d'une association 
//@desc Delete association
//@routes  DELETE /api/centCren
//@access  Private
const removeAssoc = asyncHandler(async (req ,res)=>{
    const {centerId, creneauId} = req.body 
    if( !centerId || !creneauId ){
        res.status(401).json({message  : "Missing fields :centerId and creneauId "})
    } else {
        const center = await Center.findOne({where : {id : req.body.centerId}})
        const creneau = await Creneau.findOne({where : {id : req.body.creneauId}})
        if(center && creneau){
          const deletedAssoc =  await CentCren.destroy({ where: {centerId : req.body.centerId , creneauId : req.body.creneauId}});
          const Associations = await CentCren.findAll()
            res.status(200).json({
                message : 'Association deleted successfuly , the assocaitions lasting are : ',
                data: Associations
            })
    }else {
        res.status(404).json('Center or creneau not found, check the ids given')
    }
    }      
})


module.exports = {
    createAssoc,
    getCrenByCenterId,
    updateAssocByCenterId,
    removeAssoc
}