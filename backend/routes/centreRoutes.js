//the concept is that each resource in our API will have its own route file
//and the routes for those resources will be imported into server.js to make them available at /

const express = require('express')
const router = express.Router()
const {getCenter} = require('../controllers/centreController')


router.get('/', getCenter)

router.post('/', (req, res) => {
    res.status(200).json({message: 'Set centers'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update centers ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete centers ${req.params.id}`})
})


module.exports = router 