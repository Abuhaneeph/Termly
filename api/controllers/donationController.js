require('dotenv').config();

const donationModel = require('../models/donationModel');


const createDonationController = async (req, res) => {
  try {
    // Extract donation data from the request body
    const donationData = req.body;

    // Call the model function to create a donation
    const result = await donationModel.createDonation(donationData);

    // Send a success response with the created donation details
    res.status(201).json(result);
  } catch (error) {
    // Handle errors and send an appropriate error response
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getDonationsController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 3;

    const donations = await donationModel.getDonations(page, pageSize);

    res.json({ donations, currentPage: page });
  } catch (error) {
    console.error('Error getting donations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getDonationCountController = async (req, res) => {
  try {
    const totalDonations = await donationModel.getDonationCount();
    res.json({ totalDonations });
  } catch (error) {
    console.error('Error getting donation count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDonationByIdController = async (req, res) => {
  try {
    const { donationId } = req.params;

    const donation = await donationModel.getDonationById(donationId);

    res.json({ donation });
  } catch (error) {
    console.error('Error getting donation by ID:', error);

    if (error.message === 'Donation not found') {
      return res.status(404).json({ error: 'Donation not found' });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateDonationController = async (req, res) => {
  try {
    const { id } = req.params;
    const donationData = req.body;

    const updatedDonation = await donationModel.updateDonationById(id, donationData);

    res.status(200).json(updatedDonation);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const updateAmountRaisedController = async (req, res) => {
  const { donationId } = req.params;
  const { newAmountRaised } = req.body;

  try {
    const result = await donationModel.updateAmountRaised(donationId, newAmountRaised);
    res.json(result);
  } catch (error) {
    console.error('Error updating amount raised (controller):', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  createDonationController,getDonationsController,getDonationCountController
  ,getDonationByIdController,updateDonationController,updateAmountRaisedController,
  
};