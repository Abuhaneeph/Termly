
const bcrypt =require('bcryptjs')

// Hash a password
export async function hashPassword(password) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

export async function checkPassword(inputPassword, hashedPassword) {
    try {
      const passwordMatch = await bcrypt.compare(inputPassword, hashedPassword);
      return passwordMatch;
    } catch (error) {
      console.error('Error checking password:', error);
      throw error;
    }
  }
  
 