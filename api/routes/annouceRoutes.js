const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/annoucementController');

router.post('/createAnnouncement', announcementController.createAnnouncementController);

module.exports = router;

