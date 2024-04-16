const express = require('express');
const { createCreneau, getAllCreneaux, getCreneauById } = require('../controllers/creneauController');
const router = express.Router()

router.post( '/', createCreneau)
router.get('/',getAllCreneaux)
router.get('/:id',getCreneauById)


module.exports = router;