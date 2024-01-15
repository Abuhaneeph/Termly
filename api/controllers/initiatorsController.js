const db = require('../db');
require('dotenv').config();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const initiatorsModel = require('../models/initiatorsModel');







const createInitiatorController = async (req, res) => {
  try {
    // Extract initiator data from the request body
    const initiatorData = req.body;

    // Call the model function to insert initiator data into the database
    const result = await initiatorsModel.createInitiator(initiatorData);

    res.status(201).json(result);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getInitiatorByUserIdController = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user ID is passed as a route parameter

    const initiatorData = await initiatorsModel.getInitiatorByUserId(userId);

    res.status(200).json(initiatorData);
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const downloadInitiatorByUserIdController = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user ID is passed as a route parameter

    const initiatorData = await initiatorsModel.getInitiatorByUserId(userId);

    if (!initiatorData || initiatorData.length === 0) {
      return res.status(404).json({ error: 'Initiator not found' });
    }

    // Extract the first object from the array
    const firstInitiator = initiatorData[0];

    // Generate a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const filename = `initiator_${userId}_${timestamp}.pdf`;

    // Create a promise to generate the PDF
    const generatePDF = () => {
      return new Promise((resolve, reject) => {
        const pdfDoc = new PDFDocument();
        pdfDoc.pipe(fs.createWriteStream(filename));

        pdfDoc.fontSize(12)
          .text('Initiator Information', { align: 'center', underline: true })
          .moveDown(1);

        pdfDoc.fontSize(12)
          .text(`Full Name: ${firstInitiator.fName} ${firstInitiator.mName} ${firstInitiator.lName}`)
          .text(`Home Address: ${firstInitiator.AddressHome}`)
          .text(`Work Address: ${firstInitiator.AddressWork}`)
          .text(`Email Address: ${firstInitiator.email}`)
          .text(`Birthday: ${firstInitiator.birth}`)
          .text(`Qualification: ${firstInitiator.Qualification}`)
          .moveDown(1);

        pdfDoc.text('Gender:', { continued: true }).text(firstInitiator.maleChecked === 1 ? 'Male' : 'Female');
        pdfDoc.text('Monthly Income:', { continued: true }).text(firstInitiator.monthlyChecked === 1 ? 'Yes' : 'No');
        pdfDoc.text('Employment Status:', { continued: true }).text(firstInitiator.employmentChecked === 1 ? 'Employed' : 'Unemployed');
        pdfDoc.text('Means of Identification:', { continued: true }).text(firstInitiator.idChecked === 1 ? 'Yes' : 'No');
        pdfDoc.text(`ID Number: ${firstInitiator.idNumber}`);
        
        pdfDoc.moveDown(1);
        pdfDoc.fontSize(12)
          .text('Bank Details', { underline: true })
          .moveDown(1);

        // Additional Fields
        pdfDoc.text(`BVN: ${firstInitiator.BVN}`);
        pdfDoc.text(`Account Number: ${firstInitiator.aNumber}`);
        pdfDoc.text(`Bank Card: ${firstInitiator.bCard}`);
        pdfDoc.text(`Bank Name: ${firstInitiator.bName}`);
        
        pdfDoc.moveDown(1);
        pdfDoc.fontSize(12)
          .text('Next of Kin', { underline: true })
          .moveDown(1);

        pdfDoc.text(`Next of Kin Address: ${firstInitiator.kAddressHome}`);
        pdfDoc.text(`Next of Kin Full Name: ${firstInitiator.kfName} ${firstInitiator.klName} ${firstInitiator.kmName}`);
        pdfDoc.text('Next of Kin Gender:', { continued: true }).text(firstInitiator.kmaleChecked === 1 ? 'Male' : 'Female');
        pdfDoc.text(`Next of Kin Phone Number: ${firstInitiator.kphoneNumber}`);
        pdfDoc.text(`Marital Status: ${firstInitiator.maritalChecked === 1 ? 'Married' : 'Single'}`);

        pdfDoc.end();
        pdfDoc.on('end', resolve);
        pdfDoc.on('error', reject);
      });
    };

    // Wait for the PDF generation to complete
    await generatePDF();

    // Stream the PDF to the response
    const pdfStream = fs.createReadStream(filename);

    // Set the response headers for downloading
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/pdf');

    // Stream the PDF to the response
    pdfStream.pipe(res);

    // Delete the PDF file after streaming
    pdfStream.on('end', () => {
      fs.unlinkSync(filename);
    });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// your-controller.js

const getInitiatorDataByUserIdController = async (req, res) => {
  try {
    const userId = req.params.userId;

    const initiatorData = await initiatorsModel.getInitiatorDataByUserId(userId);

    // Check if initiatorData is null or an empty array
    if (!initiatorData || initiatorData.length === 0) {
      return res.status(404).json({ error: 'Initiator data not found for the given user ID' });
    }

    // Assuming the result is an array with a single object like { initiators_id: 123, fName: 'John' }
    const { initiators_id, fName } = initiatorData[0]; // Destructure the properties

    res.status(200).json({ initiator_id: initiators_id, fName: fName });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};





module.exports = { createInitiatorController,getInitiatorByUserIdController,downloadInitiatorByUserIdController,
  getInitiatorDataByUserIdController,
};
