const express = require('express');

const router = express.Router();
const { createUser } = require('../controllers/registerControllers');
const { loginUser } = require('../controllers/loginControllers');
// const { validateUserRegistration, userValidation } = require('../middlewares/validation/userValidation');

// Making post request
router.post('/register-user', createUser);

router.post('/login-user', loginUser);

module.exports = router;
