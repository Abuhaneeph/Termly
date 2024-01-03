const db = require('../db');

const createUser = async (userData) => {
  try {
    // Check if the user with the given email already exists
    const emailExists = await checkUserEmailExists(userData.email);

    if (emailExists) {
      // If the email already exists, return an error or a specific message
      return { success: false, message: 'User with this email already exists' };
    }

    // If the email doesn't exist, proceed with user creation
    const query = `
      INSERT INTO users 
        (email, password, verification_code, state, first_name, middle_name, last_name, organization)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      userData.email,
      userData.password,
      userData.verification_code,
      userData.state,
      userData.first_name,
      userData.middle_name,
      userData.last_name,
      userData.organization,
    ]);

    return { success: true, message: 'User created successfully', userId: result.insertId };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Internal Server Error');
  }
};

const checkUserEmailExists = async (email) => {
  const query = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
  const [result] = await db.execute(query, [email]);
  const count = result[0].count;
  return count > 0;
};

const userExistsByEmailAndVerificationCode = async (email, verificationCode) => {
  const checkQuery = 'SELECT * FROM users WHERE email = ? AND verification_code = ?';
  const values = [email, verificationCode];

  try {
    const [userResult] = await db.query(checkQuery, values);

    if (userResult.length > 0) {
      const user = userResult[0];

      if (user.is_verified === 1) {
        // User already verified
        return { success: false, message: 'Email already verified' };
      } else {
        // Update is_verified to 1
        const updateQuery = 'UPDATE users SET is_verified = 1 WHERE email = ? AND verification_code = ?';
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
    console.error('Error checking user existence or updating is_verified:', error);
    throw error;
  }
};



const updateUserAccountType = async (email, accountType) => {
  try {
    const updateQuery = 'UPDATE users SET account_type = ? WHERE email = ?';
    const [updateResult] = await db.query(updateQuery, [accountType, email]);

    if (updateResult.affectedRows === 1) {
      return { success: true, message: 'Account type updated successfully' };
    } else {
      return { success: false, message: 'Error updating account type' };
    }
  } catch (error) {
    console.error('Error updating account type:', error);
    throw error;
  }
};

const getUserIDByEmail = async (email) => {
  try {
    const query = 'SELECT user_id FROM users WHERE email = ?';
    const [result] = await db.execute(query, [email]);

    if (result.length > 0) {
      return { success: true, user_id: result[0].user_id };
    } else {
      return { success: false, message: 'User not found with the provided email' };
    }
  } catch (error) {
    console.error('Error retrieving user ID by email:', error);
    throw new Error('Internal Server Error');
  }
};



module.exports = {
  createUser,checkUserEmailExists,userExistsByEmailAndVerificationCode
  ,updateUserAccountType,getUserIDByEmail
};
