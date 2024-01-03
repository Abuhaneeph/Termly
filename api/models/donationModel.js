// Assume this is your database connection module
const db = require('../db');

const createDonation = async (donationData) => {
  try {
    const { donation_title, video_url, category, donation_amount, location, donation_poster,donation_desc } = donationData;

    const query = `
      INSERT INTO donation 
        (donation_title, video_url, category, donation_amount, location, donation_poster,donation_desc)
      VALUES (?, ?, ?, ?, ?, ?,?)
    `;

    const [result] = await db.execute(query, [
      donation_title,
      video_url,
      category,
      donation_amount,
      location,
      donation_poster,
      donation_desc,
    ]);

    return { message: 'Donation created successfully', donationId: result.insertId };
  } catch (error) {
    console.error('Error creating donation:', error);
    throw new Error('Internal Server Error');
  }
};
const getDonations = async (page, pageSize) => {
  try {
    const offset = (page - 1) * pageSize;

    const query = `
      SELECT * FROM donation
      LIMIT ? OFFSET ?
    `;

    const [donations] = await db.execute(query, [pageSize, offset]);

    return donations;
  } catch (error) {
    console.error('Error fetching donations:', error);
    throw new Error('Internal Server Error');
  }
};
const getDonationCount = async () => {
  try {
    const query = 'SELECT COUNT(*) as totalDonations FROM donation';
    const [result] = await db.execute(query);

    return result[0].totalDonations;
  } catch (error) {
    console.error('Error getting donation count:', error);
    throw new Error('Internal Server Error');
  }
};
const getDonationById = async (donationId) => {
  try {
    const query = 'SELECT * FROM donation WHERE donation_id = ?';
    const [result] = await db.execute(query, [donationId]);

    if (result.length === 0) {
      throw new Error('Donation not found');
    }

    return result[0];
  } catch (error) {
    console.error('Error getting donation by ID:', error);
    throw new Error('Internal Server Error');
  }
};
const updateDonationById = async (donationId, updatedData) => {
  try {
    const {
      donation_title,
      video_url,
      category,
      donation_amount,
      location,
      donation_poster,
      donation_desc,
    } = updatedData;

    // Create an array of parameters, replacing undefined with null
    const params = [
      donation_title || null,
      video_url || null,
      category || null,
      donation_amount || null,
      location || null,
      donation_poster || null,
      donation_desc || null,
      donationId,
    ];

    const query = `
      UPDATE donation
      SET
        donation_title = ?,
        video_url = ?,
        category = ?,
        donation_amount = ?,
        location = ?,
        donation_poster = ?,
        donation_desc = ?
      WHERE donation_id = ?
    `;

    const [result] = await db.execute(query, params);

    return { message: 'Donation updated successfully', rowsAffected: result.affectedRows };
  } catch (error) {
    console.error('Error updating donation:', error);
    throw new Error('Internal Server Error');
  }
};

const updateAmountRaised = async (donationId, newAmountRaised) => {
  try {
    if (newAmountRaised === undefined || donationId === undefined) {
      throw new Error('Invalid parameters for updating amount raised');
    }

    // Retrieve the previous amount_raised
    const getPreviousAmountQuery = 'SELECT amount_raised FROM donation WHERE donation_id = ?';
    const [previousAmountResult] = await db.execute(getPreviousAmountQuery, [donationId]);

    if (previousAmountResult.length === 0) {
      throw new Error('Donation not found');
    }

    const previousAmountRaised = previousAmountResult[0].amount_raised;

    // Calculate the new amount_raised by adding the recent newAmountRaised
    const updatedAmountRaised = previousAmountRaised + newAmountRaised;

    // Update the amount_raised in the database
    const updateQuery = 'UPDATE donation SET amount_raised = ? WHERE donation_id = ?';
    const [updateResult] = await db.execute(updateQuery, [updatedAmountRaised, donationId]);

    if (updateResult.affectedRows === 0) {
      throw new Error('Failed to update amount raised');
    }

    return {
      message: 'Amount raised updated successfully',
      previousAmountRaised,
      newAmountRaised,
      updatedAmountRaised,
    };
  } catch (error) {
    console.error('Error updating amount raised:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  createDonation,getDonations,getDonationCount,getDonationById,updateDonationById
  ,updateAmountRaised
};
