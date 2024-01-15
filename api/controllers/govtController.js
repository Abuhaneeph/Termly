
const db = require('../db');
const govtModel = require('../models/govtModel');

const createGovtController = async (req, res) => {
  try {
    const govtData = req.body;
    const result = await govtModel.createGovt(govtData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createGovtController };


