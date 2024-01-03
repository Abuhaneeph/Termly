// models/ngoModel.js
const db = require('../db');

const createNgo = async (ngoData) => {
  try {
    const {
      user_id,
      email,
      organisation,
      phoneNumber,
      registrationNumber,
      name,
      pos,
      address,
      mobileNumber,
      aName,
      bName,
      bNumber,
      certReg,
      certAddr,
      certDir,
    } = ngoData;

    const query = `
    INSERT INTO ngo_organisations
    (user_id, email, organisation, phoneNumber, registrationNumber, name, pos, address, mobileNumber, aName, bName, bNumber, certReg, certAddr, certDir)
    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?);
    `;

    const [result] = await db.execute(query, [
      user_id,
      email,
      organisation,
      phoneNumber,
      registrationNumber,
      name,
      pos,
      address,
      mobileNumber,
      aName,
      bName,
      bNumber,
      certReg,
      certAddr,
      certDir,
    ]);

    return { message: 'NGO Organization registered successfully', ngoId: result.insertId };
  } catch (error) {
    console.error('Error registering NGO Organization:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = { createNgo };
