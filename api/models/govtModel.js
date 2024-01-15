const db = require('../db');

const createGovt = async (govtData) => {
  try {
    const { user_id, organisation, email, reg_no, history } = govtData;

    const query = `
      INSERT INTO govt_organisation
      (user_id, organisation, email, reg_no, history)
      VALUES ( ?, ?, ?, ?, ?);
    `;

    const [result] = await db.execute(query, [ user_id, organisation, email, reg_no, history]);

    return { message: 'Government Organization registered successfully', govtId: result.insertId };
  } catch (error) {
    console.error('Error registering Government Organization:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = { createGovt };
