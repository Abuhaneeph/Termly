// routes/emailRoutes.js
const express = require('express');
const updateStatController = require('../controllers/updateStatisticsController');
const getStat=require('../controllers/getStatistics')


const router = express.Router();

router.put('/updateTermlyStat',updateStatController.updateStatisticsController)
router.get('/getStat',getStat.getStatisticsController)

module.exports = router;
