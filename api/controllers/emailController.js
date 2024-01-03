// controllers/emailController.js
const emailModel = require("../models/emailModel");
require('dotenv').config();
async function sendEmailController(req, res) {
  // Assuming the client sends the "to" and "verification_code" fields in the request body
  const { to, verification_code } = req.body;

  // Validate if the "to" and "verification_code" fields are present in the request body
  if (!to || !verification_code) {
    return res.status(400).json({ error: "Invalid email options. Make sure 'to' and 'verification_code' are provided." });
  }

  // Default or constant email options
  const emailOptions = {
    from: `"Termly" <${process.env.SMTP_USER}>`,
    subject: 'Hello ✔',
    text: `Your verification code is: ${verification_code}`, // Include the dynamic verification code in the text
    html: `<b>Your verification code is: ${verification_code}</b>`, // Include the dynamic verification code in the HTML
    to, // Use the dynamic "to" field from the request body
  };
  

  try {
    const info = await emailModel.sendEmail(emailOptions);
    res.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error in sendEmailController:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  sendEmailController,
};
