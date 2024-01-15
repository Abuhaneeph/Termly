const db = require('../db');

const createPoliticalBody = async (politicalBodyData) => {
  try {
    const { user_id, organisation_name, reg_name, email } = politicalBodyData;

    const query = `
      INSERT INTO political_body
      (user_id, organisation_name, reg_name, email)
      VALUES (?, ?, ?, ?);
    `;

    const [result] = await db.execute(query, [user_id, organisation_name, reg_name, email]);

    return { message: 'Political body entry created successfully', politicalBodyId: result.insertId };
  } catch (error) {
    console.error('Error creating political body entry:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = { createPoliticalBody };
