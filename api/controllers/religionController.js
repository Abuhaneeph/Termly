const db = require('../db');
const multer = require('multer');
const religionOrganisationModel = require('../models/religionModel');
const registerReligionOrganisation = async (req, res) => {
  try {
    const organisationData = req.body;

    // Set fields for certificates
    organisationData.certDir = req.body.certDir || null;
    organisationData.certAddr = req.body.certAddr || null;
    organisationData.certReg = req.body.certReg || null;

    // Set other certificate fields as needed

    const result = await religionOrganisationModel.registerReligionOrganisation(organisationData);

    if (result.success) {
      res.status(200).json({ success: true, message: result.message, organisationId: result.organisationId });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Error registering religion organisation:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


module.exports = { registerReligionOrganisation };
