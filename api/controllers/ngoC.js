// controllers/ngoController.js
const ngoModel = require('../models/ngoModel');

const createNgoController2 = async (req, res) => {
  try {
   
    const ngoData = req.body;
    

    // Ensure that all necessary fields are present in the request body
    const requiredFields = [
      'user_id', 'email', 'organisation', 'phoneNumber', 'registrationNumber',
      'name', 'pos', 'address', 'mobileNumber', 'aName', 'bName', 'bNumber',
      'certReg', 'certAddr', 'certDir'
    ];

    for (const field of requiredFields) {
      if (!(field in ngoData) || ngoData[field] === undefined) {
        return res.status(400).json({ error: `Missing or undefined value for field: ${field}` });
      }
    }
    console.log(req.body)
    // Call createNgo model with the validated ngoData
    const result = await ngoModel.createNgo(ngoData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createNgoController2 };
