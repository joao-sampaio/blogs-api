const express = require('express');
const { valToken } = require('../auth/validateToken');

const router = express.Router();

// const controllers = require('../controllers');

const { users } = require('../controllers');
const { valDisplayName, valEmail, valPassword } = require('../middlewares/validations');

router.post('/', valDisplayName, valEmail, valPassword, users.newUser);
router.get('/', valToken, users.findAll);
router.get('/:id', valToken, users.findById);

module.exports = router;