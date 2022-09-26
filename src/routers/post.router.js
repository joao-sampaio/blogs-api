const express = require('express');
const { valToken } = require('../auth/validateToken');
const { valCategories } = require('../middlewares/validations');

const router = express.Router();

// const controllers = require('../controllers');

const { posts } = require('../controllers');

router.post('/', valToken, valCategories, posts.newPost);

module.exports = router;