const express = require('express')
const getHomeImages = require('../controllers/home_controller');

const router = express.Router();

router.route("/home").get(getHomeImages);

module.exports = {
    routes:router
};