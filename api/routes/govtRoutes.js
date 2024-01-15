// routes/emailRoutes.js
const express = require('express');
const  govtController = require('../controllers/govtController');

const router = express.Router();

router.post('/createGovtBody', govtController.createGovtController);

module.exports = router;
