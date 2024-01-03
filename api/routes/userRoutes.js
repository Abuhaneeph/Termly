const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createUser', userController.createUserController);
router.post('/checkUserEmailExists',userController.checkUserEmailExistsController);
router.post('/verifyEmail',userController.checkUserByEmailAndVerificationCode);
router.put('/updateAccountType',userController.updateUserAccountTypeController);
router.get('/user/:email', userController.getUserIDByEmailController);
module.exports = router;
