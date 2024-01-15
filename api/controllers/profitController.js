// controllers/profitController.js

const db = require('../db'); // Assuming you have a database connection module
const multer = require('multer');
const profitModel= require('../models/profitModel')
const createProfitController = async (req, res) => {
  try {
    

      const profitData = req.body;
    

      const result = await profitModel.createProfit(profitData);

      res.status(201).json(result);
    // });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createProfitController };
