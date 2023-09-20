const express = require('express')
const sendForm = require('../controllers/contact_form_controller')

const router = express.Router();

router.route("/contact_form").post(sendForm);

module.exports = {
    routes:router
};