const express = require('express');
const { createCreneau, getAllCreneaux, getCreneauById, updateCreneau, deleteCreneau } = require('../controllers/creneauController');
const router = express.Router()

router.post( '/', createCreneau)
router.get('/',getAllCreneaux)
router.get('/:id',getCreneauById)
router.put('/:id',updateCreneau)
router.delete('/:id', deleteCreneau)


module.exports = router;