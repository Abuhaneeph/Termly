const db = require('../db');



const createContributor = async (contributorData) => {
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
        monthlyChecked,
        referre
      } = contributorData;
  
      const query = `
        INSERT INTO contributors
        (user_id, AddressHome, AddressWork, BVN, Qualification, aNumber, bCard, bName, birth, certPass, email, 
         employmentChecked, fName, femaleChecked, idChecked, idNumber, kAddressHome, kfName, kfemaleChecked, 
         klName, kmName, kmaleChecked, kphoneNumber, lName, mName, maleChecked, maritalChecked, monthlyChecked,referre)
        VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?);
      `;
  
      const [result] = await db.execute(query, [
        user_id, AddressHome, AddressWork, BVN, Qualification, aNumber, bCard, bName, birth, certPass, email,
        employmentChecked, fName, femaleChecked, idChecked, idNumber, kAddressHome, kfName, kfemaleChecked,
        klName, kmName, kmaleChecked, kphoneNumber, lName, mName, maleChecked, maritalChecked, monthlyChecked,referre
      ]);
  
      return { message: 'Contributor registered successfully', contributorId: result.insertId };
    } catch (error) {
      console.error('Error registering Contributor:', error);
      throw new Error('Internal Server Error');
    }
  };
  

module.exports={
    createContributor
}