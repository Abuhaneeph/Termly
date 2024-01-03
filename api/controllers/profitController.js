// controllers/profitController.js

const db = require('../db'); // Assuming you have a database connection module
const multer = require('multer');
const profitModel= require('../models/profitModel')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.fieldname;
    const destination = '../public/profit_credentials';
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadFileMiddleware = upload.fields([
  { name: 'certID', maxCount: 1 },
  { name: 'certAddr', maxCount: 1 },
  { name: 'certMem', maxCount: 1 },
  { name: 'certInc', maxCount: 1 },
]);

const createProfitController = async (req, res) => {
  try {
    uploadFileMiddleware(req, res, async (err) => {
      if (err) {
        console.error('File Upload Error:', err);
        return res.status(500).json({ error: 'File Upload Error' });
      }

      const profitData = req.body;
      profitData.certID = req.files['certID'][0].originalname;
      profitData.certAddr = req.files['certAddr'][0].originalname;
      profitData.certMem = req.files['certMem'][0].originalname;
      profitData.certInc = req.files['certInc'][0].originalname;

      const result = await profitModel.createProfit(profitData);

      res.status(201).json(result);
    });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {createProfitController}
