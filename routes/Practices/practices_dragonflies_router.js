const express = require('express')
const getPractices = require('../../controllers/practices_dragonflies_controller')
const router = express.Router()

router.route('/practices_page/dragonflies').get(getPractices)

module.exports={
    routes:router
}