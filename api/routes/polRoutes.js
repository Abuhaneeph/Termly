// routes/emailRoutes.js
const express = require('express');
const polController = require('../controllers/politicalBodyController');

const router = express.Router();

router.post('/createPoliticalBody', polController.createPoliticalBodyEntry);

module.exports = router;
