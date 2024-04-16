const express = require('express')
const router = express.Router()
const {createRDV} = require('../controllers/rdvController')

router.post('/',createRDV)

module.exports = router