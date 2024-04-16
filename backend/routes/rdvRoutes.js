const express = require('express')
const router = express.Router()
const {createRDV, getRDVs, getRDVByID} = require('../controllers/rdvController')

router.route('/').post(createRDV).get(getRDVs) 
router.route('/:id').get(getRDVByID)



module.exports = router