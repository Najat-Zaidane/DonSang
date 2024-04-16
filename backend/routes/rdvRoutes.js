const express = require('express')
const router = express.Router()
const {createRDV, getRDVs, getRDVByID, updateRDV, deleteRDV } = require('../controllers/rdvController')
const { protect } = require('../middleware/authMiddleware')

//router.get('/allrdvs', protect, getRDVs) to protect the getRDVS route 

router.route('/').post(createRDV).get(getRDVs) 
router.route('/:id').get(getRDVByID).put(updateRDV).delete(deleteRDV)


module.exports = router