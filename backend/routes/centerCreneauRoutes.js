const express = require('express')
const { createAssoc, getCrenByCenterId, updateAssocByCenterId, removeAssoc } = require('../controllers/centerCreneauController')
const router = express.Router()

router.post('/',createAssoc)
router.get('/:id',getCrenByCenterId)
router.put('/',updateAssocByCenterId)
router.delete('/', removeAssoc)


module.exports = router