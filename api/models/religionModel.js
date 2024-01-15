const db = require('../db');


const registerReligionOrganisation = async (organisationData) => {
  try {
    const {
      user_id,
      email,
      phoneNumber,
      registrationNumber,
      name,
      pos,
      address,
      aName,
      bName,
      bNumber,
      certReg,
      certAddr,
      certDir,
      mobileNumber,
    } = organisationData;



    const query = `
      INSERT INTO religion_organisations
        (user_id, email, phoneNumber, registrationNumber, name, pos, address, aName, bName, bNumber, certReg, certAddr, certDir, mobileNumber)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      user_id ,
      email ,
      phoneNumber ,
      registrationNumber ,
      name ,
      pos ,
      address ,
      aName ,
      bName ,
      bNumber ,
      certReg ,
      certAddr ,
      certDir ,
      mobileNumber ,
    ]);

    return { success: true, message: 'Religion Organisation registered successfully', organisationId: result.insertId };
  } catch (error) {
    console.error('Error registering religion organisation:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  registerReligionOrganisation,
};
