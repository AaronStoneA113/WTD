const express = require('express')
const getOpenSource = require('../../controllers/openSource_controller')
const router = express.Router()

router.route('/open_source_data').get(getOpenSource)

module.exports={
    routes:router
}