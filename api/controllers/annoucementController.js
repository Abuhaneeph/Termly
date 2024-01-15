const announcementModel = require('../models/announcementModel');

const createAnnouncementController = async (req, res) => {
  try {
    const announcementData = req.body;
    const result = await announcementModel.createAnnouncement(announcementData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createAnnouncementController };
