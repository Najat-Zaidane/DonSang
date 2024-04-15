const express = require('express')
const { createRDV } = require('../controllers/rdvController')
const router = express.Router()

router.post('/',createRDV)