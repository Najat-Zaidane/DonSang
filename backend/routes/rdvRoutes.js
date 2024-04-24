const express = require('express')
const router = express.Router()
const {createRDV, getRDVs, getRDVByID, updateRDV, deleteRDV } = require('../controllers/rdvController')
const { protect } = require('../middleware/authMiddleware')

//all the routes need to be protected
router.route('/').post(createRDV).get(getRDVs) 
router.route('/:id').put(protect,updateRDV).delete(protect,deleteRDV)
//router.route('/:id').get(getRDVByID).put(updateRDV).delete(deleteRDV)



module.exports = router