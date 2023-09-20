const express = require('express')
const getHabitat = require('../../controllers/habitat_controller')
const router = express.Router()

router.route('/practices_page/habitat').get(getHabitat)

module.exports={
    routes:router
}