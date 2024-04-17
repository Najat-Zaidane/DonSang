const express = require('express')
const router = express.Router()
const {createRDV, getRDVs, getRDVByID, updateRDV, deleteRDV } = require('../controllers/rdvController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').post(createRDV).get(protect,getRDVs) 
router.route('/:id').put(updateRDV).delete(deleteRDV)
//router.route('/:id').get(getRDVByID).put(updateRDV).delete(deleteRDV)



module.exports = router