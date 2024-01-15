const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');
const donationRoutes= require('./donationRoutes');
const donationOrgRoutes= require('./donationOrgRoutes')
const profitRoutes= require('./profitRoutes');
const ngoRoutes = require('./ngoRoutes')
const relRoutes = require('./religionRoutes')
const govtRoutes= require('./govtRoutes')
const polRoutes= require('./polRoutes')
const termlyStat= require('./statRoutes')
const initiatorRoutes= require('./initiatorsRoutes')
const contributorRoutes= require('./contributorsRoutes')
const groupRoutes= require('./groupRoutes')
const annouceRoutes= require('./annouceRoutes')
router.use('/api', userRoutes);
router.use('/api', emailRoutes);
router.use('/api', donationRoutes);
router.use('/api',donationOrgRoutes);
router.use('/api',profitRoutes);
router.use('/api',ngoRoutes);
router.use('/api',relRoutes);
router.use('/api',govtRoutes);
router.use('/api',polRoutes);
router.use('/api',termlyStat)
router.use('/api',initiatorRoutes)
router.use('/api',contributorRoutes)
router.use('/api',groupRoutes)
router.use('/api',annouceRoutes)

module.exports = router;
