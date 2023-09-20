const express = require('express');
const getProjectImages = require('../controllers/project_controller');

const router = express.Router();
 router.route("/project_images").get(getProjectImages);

module.exports = {
    routes:router
};
