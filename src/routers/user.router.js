const express = require('express');

const router = express.Router();

// const controllers = require('../controllers');

const { users } = require('../controllers');
const { valDisplayName, valEmail, valPassword } = require('../middlewares/validations');

router.post('/', valDisplayName, valEmail, valPassword, users.newUser);

module.exports = router;