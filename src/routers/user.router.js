const express = require('express');

const router = express.Router();

// const controllers = require('../controllers');

const { users } = require('../controllers');

router.post('/login', users.login);

// router.get('/:id', controllers.products.findById);

// router.post('/', controllers.products.newProduct);

// router.put('/:id', controllers.products.updateProduct);

module.exports = router;