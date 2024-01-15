// routes/emailRoutes.js
const express = require('express');
const religionController = require('../controllers/religionController');


const router = express.Router();

router.post('/registerReligionBody', religionController.registerReligionOrganisation)

module.exports = router;
