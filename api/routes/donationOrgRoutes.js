const express = require('express');
const router = express.Router();
const donationOrgController = require('../controllers/donationOrganisationController');

router.post('/registerOrganisation', donationOrgController.registerOrganisation);
router.post('/verifyOrganisationEmail', donationOrgController.verifyOrganisationByEmailAndVerificationCode);
router.post('/loginOrganisation', donationOrgController.loginOrganisationController);
router.post('/checkOrganisationEmailExists', donationOrgController.checkOrganisationEmailExistsController);

module.exports = router;

