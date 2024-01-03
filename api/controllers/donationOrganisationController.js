// donationOrganisationController.js
const bcrypt = require('bcrypt');
const donationOrganisationModel = require('../models/donationOrganisationModel');

const registerOrganisation = async (req, res) => {
  const organisationData = req.body;

  try {
    const result = await donationOrganisationModel.registerOrganisation(organisationData);

    if (result.success) {
      res.status(200).json({ success: true, message: result.message, organisationId: result.organisationId });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error registering organisation:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};






const verifyOrganisationByEmailAndVerificationCode = async (req, res) => {
  const { email, verificationCode } = req.body;

  if (!email || !verificationCode) {
    return res.status(400).json({ success: false, message: 'Email and verification code are required' });
  }

  try {
    const verificationResult = await donationOrganisationModel.verifyOrganisationByEmailAndVerificationCode(email, verificationCode);

    if (verificationResult.success) {
      // Email verification succeeded
      res.json({ success: true, message: verificationResult.message });
    } else {
      // Email verification failed
      res.json({ success: false, message: verificationResult.message });
    }
  } catch (error) {
    console.error('Error checking organisation existence or updating is_verified:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const loginOrganisationController = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }
  
    try {
      const loginResult = await donationOrganisationModel.loginOrganisation(email, password);
  
      if (loginResult.success) {
        // Login successful
        res.json({ success: true, message: loginResult.message });
      } else {
        // Login failed
        res.status(401).json({ success: false, message: loginResult.message });
      }
    } catch (error) {
      console.error('Error during organisation login:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  
  const checkOrganisationEmailExistsController = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ exists: false, message: 'Email is required' });
    }
  
    try {
      const emailExists = await donationOrganisationModel.checkOrganisationEmailExists(email);
  
      res.json({ exists: emailExists, message: 'Email existence checked successfully' });
    } catch (error) {
      console.error('Error checking organisation email existence:', error);
      res.status(500).json({ exists: false, message: 'Internal Server Error' });
    }
  };


module.exports = { registerOrganisation,verifyOrganisationByEmailAndVerificationCode,
    loginOrganisationController,checkOrganisationEmailExistsController };
