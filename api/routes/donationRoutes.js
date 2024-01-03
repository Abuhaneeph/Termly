const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/createDonation', donationController.createDonationController);
router.get('/getDonation',donationController.getDonationsController)
router.get('/getDonationCount',donationController.getDonationCountController)
router.get('/getDonationById/:donationId', donationController.getDonationByIdController);
router.put('/updateDonationById/:id',donationController.updateDonationController)
router.put('/updateAmountRaised/:donationId',donationController.updateAmountRaisedController)
module.exports = router;
