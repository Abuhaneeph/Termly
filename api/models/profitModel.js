// models/profitModel.js

const db = require('../db'); // Assuming you have a database connection module

const createProfit = async (profitData) => {
  try {
    const {
        user_id,
        accountName,
        bankName,
        BVN,
        businessEmail,
        businessName,
        certAddr,
        certID,
        certInc,
        certMem,
        city,
        fName,
        gender,
        lName,
        localGovt,
        mName,
        mobileNumber,
        NIN,
        phoneNumber,
        registeredNumber,
        street,
        birthDate ,
        llcChecked,
        registrationChecked,
        street2,
        city2,
        localGovt2
        
    } = profitData;

    const query = `
    INSERT INTO profit_organiations
    (user_id, accountName, bankName, BVN, businessEmail, businessName, certAddr, certID, certInc, certMem, city, fName, gender, lName, localGovt, mName, mobileNumber, NIN, phoneNumber, registeredNumber, street, birthDate, llcChecked, registrationChecked, street2, city2, localGovt2)
    VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    
    `;

    const [result] = await db.execute(query, [
        user_id,
        accountName,
        bankName,
        BVN,
        businessEmail,
        businessName,
        certAddr,
        certID,
        certInc,
        certMem,
        city,
        fName,
        gender,
        lName,
        localGovt,
        mName ?? null,
        mobileNumber,
        NIN,
        phoneNumber,
        registeredNumber,
        street,
        birthDate,
        llcChecked ?? 0,
        registrationChecked ?? 0,
        street2 ?? null,
        city2 ?? null,
        localGovt2 ?? null
      ]);
      

    return { message: 'Profit Organization registered successfully', profitId: result.insertId };
  } catch (error) {
    console.error('Error registering Profit Organization:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = { createProfit };
