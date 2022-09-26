const express = require('express');
const { valToken } = require('../auth/validateToken');

const router = express.Router();

// const controllers = require('../controllers');

const { categorys } = require('../controllers');
const { valCategoryName } = require('../middlewares/validations');

router.post('/', valToken, valCategoryName, categorys.newCategory);
router.get('/', valToken, categorys.findAll);
// router.get('/', valToken, categorys.findAll);
// router.get('/:id', valToken, categorys.findById);

module.exports = router;