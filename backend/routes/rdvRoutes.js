const express = require('express')
const router = express.Router()
const {createRDV, getRDVs, getRDVByID, updateRDV } = require('../controllers/rdvController')

router.route('/').post(createRDV).get(getRDVs) 
router.route('/:id').get(getRDVByID).put(updateRDV) 



module.exports = router