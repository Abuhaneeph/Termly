const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');
const donationRoutes= require('./donationRoutes');
const donationOrgRoutes= require('./donationOrgRoutes')
const profitRoutes= require('./profitRoutes');
const ngoRoutes = require('./ngoRoutes')

router.use('/api', userRoutes);
router.use('/api', emailRoutes);
router.use('/api', donationRoutes);
router.use('/api',donationOrgRoutes);
router.use('/api',profitRoutes);
router.use('/api',ngoRoutes);

module.exports = router;
