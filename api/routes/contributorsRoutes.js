// routes/emailRoutes.js
const express = require('express');
const  contributorsController = require('../controllers/contributorsController');

const router = express.Router();

router.post('/createContributor', contributorsController.createContributorController);

module.exports = router;
