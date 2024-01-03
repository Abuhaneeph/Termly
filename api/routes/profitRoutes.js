// routes/emailRoutes.js
const express = require('express');
const profitController = require('../controllers/profitController');


const router = express.Router();

router.post('/registerProfitOrganisation', profitController.createProfitController)

module.exports = router;
