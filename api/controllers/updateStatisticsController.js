
const db = require('../db'); // Assuming you have a database connection module

const donationModel = require("../models/donationModel")
const updateStatisticsController = async (req, res) => {
    try {
      const termlyId = 1; // Assuming you always want to update where termly_id is 1
      const newData = req.body;
  
      const result = await donationModel.updateStatistics(termlyId, newData);
  
      res.status(200).json(result);
    } catch (error) {
      console.error('Controller Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports={
    updateStatisticsController
  }