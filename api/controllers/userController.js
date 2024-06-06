var bcrypt = require('bcryptjs');

const userModel = require('../models/user');

const createUserController = async (req, res) => {
  try {
    const {
      s_email,
      s_password,
      code,
      s_state,
      f_name,
      l_name,
      m_name,
      s_organization,
    } = req.body;

    // Check if s_organization is an empty string, and set it to null
    const organizationValue = s_organization === '' ? null : s_organization;

    // Check if m_name is an empty string, and set it to null
    const middleNameValue = m_name === '' ? null : m_name;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(s_password, 10);

    const userData = {
      email: s_email,
      password: hashedPassword,
      verification_code: code,
      state: s_state,
      first_name: f_name,
      middle_name: middleNameValue,
      last_name: l_name,
      organization: organizationValue,
    };

    const result = await userModel.createUser(userData);

    if (result.success) {
      // User created successfully
      res.json(result);
    } else {
      // User creation failed (user already exists or other error)
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const checkUserEmailExistsController = async (req, res) => {
  try {
    const { s_email } = req.body;

    // Validate email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s_email);
    if (!isValidEmail) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if the user with the given email exists
    const userExists = await userModel.checkUserEmailExists(s_email);

    res.json({ exists: userExists });
  } catch (error) {
    console.error('Error checking user email existence:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function checkUserByEmailAndVerificationCode(req, res) {
  const { email, verificationCode } = req.body;

  if (!email || !verificationCode) {
    return res.status(400).json({ success: false, message: 'Email and verification code are required' });
  }

  try {
    const verificationResult = await userModel.userExistsByEmailAndVerificationCode(email, verificationCode);

    if (verificationResult.success) {
      // Email verification succeeded
      res.json({ success: true, message: verificationResult.message });
    } else {
      // Email verification failed
      res.json({ success: false, message: verificationResult.message });
    }
  } catch (error) {
    console.error('Error checking user existence or updating is_verified:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

const updateUserAccountTypeController = async (req, res) => {
  const { email, accountType } = req.body;

  try {
    const result = await userModel.updateUserAccountType(email, accountType);

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error('Error updating account type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserIDByEmailController = async (req, res) => {
  try {
    const { email } = req.params; // Assuming you are passing email as a route parameter

    const result = await userModel.getUserIDByEmail(email);

    if (result.success) {
      res.status(200).json({ success: true, user_id: result.user_id });
    } else {
      res.status(404).json({ success: false, message: 'User not found with the provided email' });
    }
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user with the given email exists
    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the email is verified
    if (!user.is_verified) {
      return res.status(400).json({ error: 'Email not verified' });
    }

    // Compare the hashed password with the provided password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Check the account type
    let accountTypeMessage;
    switch(user.account_type) {
      case 0:
        accountTypeMessage = 'Account type not chosen';
        break;
      case 1:
        accountTypeMessage = 'Initiator';
        break;
      case 2:
        accountTypeMessage = 'Contributor';
        break;
        case 3:
          accountTypeMessage = 'Organization';
          break;
    }

    res.json({ message: 'Login successful', account_type: accountTypeMessage });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = {
  createUserController,checkUserEmailExistsController,checkUserByEmailAndVerificationCode
  ,updateUserAccountTypeController,getUserIDByEmailController,loginUserController
};
