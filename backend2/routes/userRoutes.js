const express = require('express');

const router = express.Router();
const { createUser } = require('../controllers/userControllers');
// const { validateUserRegistration, userValidation } = require('../middlewares/validation/userValidation');

// Making post request
router.post('/register-user', createUser);

module.exports = router;
