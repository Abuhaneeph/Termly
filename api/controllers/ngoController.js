// controllers/ngoController.js
const db = require('../db');
const multer = require('multer');
const ngoModel = require('../models/ngoModel');

const createNgoController = async (req, res) => {
  try {
    const ngoData = req.body;

    // Set other certificate fields as needed

    const result = await ngoModel.createNgo(ngoData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { createNgoController };
