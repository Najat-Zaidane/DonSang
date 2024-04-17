const express = require('express')
const { createCentCren } = require('../controllers/centerCreneauController')
const router = express.Router()

router.post('/',createCentCren)

module.exports = router