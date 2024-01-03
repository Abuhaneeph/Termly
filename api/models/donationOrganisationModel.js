// donationOrganisationModel.js
const bcrypt = require('bcrypt');
const db = require('../db');

const registerOrganisation = async (organisationData) => {
  try {
    const {
      organisation,
      category,
      state,
      email,
      password,
      verification_code,
    } = organisationData;

    // Check if the email already exists
    const emailExists = await checkOrganisationEmailExists(email);

    if (emailExists) {
      return { success: false, message: 'Organisation already registered with this email' };
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO donation_organisation
        (organisation, category, state, email, password, verification_code)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      organisation,
      category,
      state,
      email,
      hashedPassword, // Store the hashed password in the database
      verification_code,
    ]);

    return { success: true, message: 'Organisation registered successfully', organisationId: result.insertId };
  } catch (error) {
    console.error('Error registering organisation:', error);
    throw new Error('Internal Server Error');
  }
};


const verifyOrganisationByEmailAndVerificationCode = async (email, verificationCode) => {
    const checkQuery = 'SELECT * FROM donation_organisation WHERE email = ? AND verification_code = ?';
    const values = [email, verificationCode];
  
    try {
      const [organisationResult] = await db.query(checkQuery, values);
  
      if (organisationResult.length > 0) {
        const organisation = organisationResult[0];
  
        if (organisation.is_verified === 1) {
          // Organisation already verified
          return { success: false, message: 'Email already verified' };
        } else {
          // Update is_verified to 1
          const updateQuery = 'UPDATE donation_organisation SET is_verified = 1 WHERE email = ? AND verification_code = ?';
          const [updateResult] = await db.query(updateQuery, values);
  
          if (updateResult.affectedRows === 1) {
            return { success: true, message: 'Email verified' };
          } else {
            return { success: false, message: 'Error updating verification status' };
          }
        }
      } else {
        // Email and verification code do not match or do not exist
        return { success: false, message: 'Invalid email or verification code' };
      }
    } catch (error) {
      console.error('Error checking organisation existence or updating is_verified:', error);
      throw error;
    }
  };

  const loginOrganisation = async (email, password) => {
    const query = 'SELECT * FROM donation_organisation WHERE email = ?';
  
    try {
      const [organisationResult] = await db.query(query, [email]);
  
      if (organisationResult.length === 0) {
        return { success: false, message: 'Organisation not found' };
      }
  
      const organisation = organisationResult[0];
  
      // Check if the organisation is verified
      if (organisation.is_verified !== 1) {
        return { success: false, message: 'Organisation not verified' };
      }
  
      // Compare hashed password
      const passwordMatch = await bcrypt.compare(password, organisation.password);
  
      if (passwordMatch) {
        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: 'Invalid email or password' };
      }
    } catch (error) {
      console.error('Error during organisation login:', error);
      throw error;
    }
  };
  
  const checkOrganisationEmailExists = async (email) => {
    const query = 'SELECT COUNT(*) AS count FROM donation_organisation WHERE email = ?';
  
    try {
      const [result] = await db.execute(query, [email]);
      const count = result[0].count;
  
      return count > 0;
    } catch (error) {
      console.error('Error checking organisation email existence:', error);
      throw error;
    }
  };
  
  
  
module.exports = { registerOrganisation ,verifyOrganisationByEmailAndVerificationCode,
    loginOrganisation,checkOrganisationEmailExists
};
