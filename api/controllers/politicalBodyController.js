const PoliticalBodyModel = require('../models/politicalBodyModel');

const createPoliticalBodyEntry = async (req, res) => {
  try {
    const politicalBodyData = req.body; // Assuming the data is in the request body

    const result = await PoliticalBodyModel.createPoliticalBody(politicalBodyData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPoliticalBodyEntry };
