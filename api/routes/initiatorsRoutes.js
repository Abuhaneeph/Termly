// routes/emailRoutes.js
const express = require('express');
const  initiatorController = require('../controllers/initiatorsController');

const router = express.Router();

router.post('/createInitiator', initiatorController.createInitiatorController);

router.get('/initiators/:userId', initiatorController.getInitiatorByUserIdController);
router.get('/getInitiatorData/:userId', initiatorController.getInitiatorDataByUserIdController);
router.get('/downloadInitiatorData/:userId', initiatorController.downloadInitiatorByUserIdController);
module.exports = router;
