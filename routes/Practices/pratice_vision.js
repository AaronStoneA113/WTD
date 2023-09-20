const express = require('express')
const getVision = require('../../controllers/vision_controller')
const router = express.Router()

router.route('/practices_page/vision').get(getVision)

module.exports={
    routes:router
}