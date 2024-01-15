const db = require('../db');
const donationModel = require("../models/donationModel")
const getStatisticsController = async (req, res) => {
    try {
      const statistics = await donationModel.getStatistics();
  
      res.json(statistics);
    } catch (error) {
      console.error('Controller Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  module.exports={
    getStatisticsController
  }