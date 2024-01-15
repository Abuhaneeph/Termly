const db = require('../db');



const createInitiator = async (initiatorData) => {
    try {
      const {
        user_id,
        AddressHome,
        AddressWork,
        BVN,
        Qualification,
        aNumber,
        bCard,
        bName,
        birth,
        certPass,
        email,
        employmentChecked,
        fName,
        femaleChecked,
        idChecked,
        idNumber,
        kAddressHome,
        kfName,
        kfemaleChecked,
        klName,
        kmName,
        kmaleChecked,
        kphoneNumber,
        lName,
        mName,
        maleChecked,
        maritalChecked,
        monthlyChecked
      } = initiatorData;
  
      const query = `
        INSERT INTO initiators
        (user_id, AddressHome, AddressWork, BVN, Qualification, aNumber, bCard, bName, birth, certPass, email, 
         employmentChecked, fName, femaleChecked, idChecked, idNumber, kAddressHome, kfName, kfemaleChecked, 
         klName, kmName, kmaleChecked, kphoneNumber, lName, mName, maleChecked, maritalChecked, monthlyChecked)
        VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
  
      const [result] = await db.execute(query, [
        user_id, AddressHome, AddressWork, BVN, Qualification, aNumber, bCard, bName, birth, certPass, email,
        employmentChecked, fName, femaleChecked, idChecked, idNumber, kAddressHome, kfName, kfemaleChecked,
        klName, kmName, kmaleChecked, kphoneNumber, lName, mName, maleChecked, maritalChecked, monthlyChecked
      ]);
  
      return { message: 'Initiator registered successfully', initiatorId: result.insertId };
    } catch (error) {
      console.error('Error registering Initiator:', error);
      throw new Error('Internal Server Error');
    }
  };



  const getInitiatorByUserId = async (userId) => {
    try {
      const query = `
        SELECT * FROM initiators
        WHERE user_id = ?;
      `;
  
      const [result] = await db.execute(query, [userId]);
  
      return result;
    } catch (error) {
      console.error('Error fetching Initiator by user ID:', error);
      throw new Error('Internal Server Error');
    }
  };
  
 
const getInitiatorDataByUserId = async (userId) => {
  try {
    const query = 'SELECT initiators_id, fName FROM initiators WHERE user_id = ?';
    const [rows] = await db.query(query, [userId]);
    console.log('Query Result:', rows); // Log the result
    return rows; // Return the result without destructuring
  } catch (error) {
    console.error('Error in getInitiatorDataByUserId:', error);
    throw error;
  }
};
  
  


  

module.exports={
    createInitiator,getInitiatorByUserId,getInitiatorDataByUserId
}