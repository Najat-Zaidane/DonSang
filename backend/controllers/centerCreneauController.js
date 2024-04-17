const asyncHandler = require('express-async-handler')
const CentCren = require('../models/centerCreneauModel')

//@desc set an association 
//@routes POST /api/centCren
//@access Private (for admin)
const createCentCren = asyncHandler( async (req, res) => {
    const {centerId , creneauID } = req.body
    if(!centerId || !creneauID ){
        res.status(401).json({msg: 'Missing fields :centerId and creneauId '})
    }
    const centcren = await CentCren.create(req.body)
    if(centcren){
        res.status(200).json({
            message : 'center and creneau associated successfuly',
            data : centcren
        })
    } else {
        res.status(400).json({message:'Failed to associate the center with this crenau'})
    }
     
})


module.exports = {
    createCentCren
}