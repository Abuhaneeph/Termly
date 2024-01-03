// controllers/ngoController.js
const db = require('../db');
const multer = require('multer');
const ngoModel = require('../models/ngoModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.fieldname;
    const destination = '../public/ngo_credentials';
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadFileMiddleware = upload.fields([
  { name: 'certReg', maxCount: 1 },
  { name: 'certAddr', maxCount: 1 },
  { name: 'certDir', maxCount: 1 },
  // Add other certificate fields as needed
]);

const createNgoController = async (req, res) => {
  try {
    uploadFileMiddleware(req, res, async (err) => {
      if (err) {
        console.error('File Upload Error:', err);
        return res.status(500).json({ error: 'File Upload Error' });
      }

      const ngoData = req.body;

      // Check if files are uploaded, and set fields accordingly
      ngoData.certDir = req.files?.['certDir']?.[0]?.originalname || null;
      ngoData.certAddr = req.files?.['certAddr']?.[0]?.originalname || null;
      ngoData.certReg = req.files?.['certReg']?.[0]?.originalname || null;

      // Set other certificate fields as needed

      const result = await ngoModel.createNgo(ngoData);

      res.status(201).json(result);
    });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createNgoController };
