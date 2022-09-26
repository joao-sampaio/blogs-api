const { Op } = require('sequelize');
const { Category } = require('../models');

const valCategoryName = (req, res, next) => {
  const data = req.body;
  const { name } = data;
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
  } else {
    next();
  }
};

const valCategories = async (req, res, next) => {
  const data = req.body;
  const { categoryIds } = data;
  if (categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const test = await Category.findAll({
    where: {
      id: {
        [Op.or]: categoryIds,
      },
    },
  });
  if (test.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  } 
    next();
  
  // const testIds = categoryIds.map(async catId => {
  //   return test
  // });
  // if (testIds.length !== categoryIds) {
  //   return {type: 400, message: '"categoryIds" not found'}
  // } else {
  //   next();
  // }
};

const valDisplayName = (req, res, next) => {
  const data = req.body;
  const { displayName } = data;
  if (displayName.length < 8) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } else {
    next();
  }
};

const valPassword = (req, res, next) => {
  const data = req.body;
  const { password } = data;
  if (password.length < 6) {
    res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  } else {
    next();
  }
};

const valEmail = async (req, res, next) => {
  const data = req.body;
  const { email } = data;
  if (!/^(.+)@(.+)$/.test(email)) {
    res.status(400).json({ message: '"email" must be a valid email' });
  } else {
    next();
  }
};

module.exports = {
  valCategories,
  valCategoryName,
  valDisplayName,
  valEmail,
  valPassword,
};