const db = require('../db');
const GroupModel =require("../models/groupModel")


const createGroupController = async (req, res) => {
    try {
        const groupData = req.body;
        const result = await GroupModel.createGroup(groupData);

        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Controller Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createGroupController
    // Add other controller methods as needed
};