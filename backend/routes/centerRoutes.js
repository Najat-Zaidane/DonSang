//the concept is that each resource in our API will have its own route file
//and the routes for those resources will be imported into server.js to make them available at /

const express = require('express')
const router = express.Router()
const {getCenters, setCenter, updateCenter, getCenterById,deleteCenter} = require('../controllers/centerController')

router.route('/').get(getCenters).post(setCenter) 
router.route('/:id').put(updateCenter).delete(deleteCenter).get(getCenterById)

module.exports = router