const express = require('express');

const router = express.Router();

// const controllers = require('../controllers');

const { users } = require('../controllers');
// const { valDisplayName, valEmail, valPassword } = require('../middlewares/validations');

router.post('/', users.login);

module.exports = router;