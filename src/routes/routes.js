const express = require("express");
const router = express.Router();
const {getHomePage, getAboutPage, getContactPage} = require('../controllers/app.conroller')

router.get("/", getHomePage);
router.get("/about",getAboutPage);
router.get("/contact",getContactPage);

module.exports = router;
