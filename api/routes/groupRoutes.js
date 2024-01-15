const express = require('express');
const  groupController = require('../controllers/groupController');

const router = express.Router();

router.post('/createGroup', groupController.createGroupController);

module.exports = router;