const express = require('express');
const { createCreneau, getAllCreneaux, getCreneauById, updateCreneau } = require('../controllers/creneauController');
const router = express.Router()

router.post( '/', createCreneau)
router.get('/',getAllCreneaux)
router.get('/:id',getCreneauById)
router.put('/:id',updateCreneau)


module.exports = router;