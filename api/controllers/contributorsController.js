const db = require('../db');
const multer = require('multer');
const contributorsModel = require('../models/contributorsModel');

const createContributorController = async (req, res) => {
  try {
    const contributorData = req.body;

    // Directly insert the contributor data
    const result = await contributorsModel.createContributor(contributorData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createContributorController };
