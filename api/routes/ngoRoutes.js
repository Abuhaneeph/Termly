const express = require('express');
const router = express.Router();
const ngoController = require('../controllers/ngoController');

router.post('/registerNGO', ngoController.createNgoController);

module.exports = router;
