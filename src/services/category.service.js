const { Category } = require('../models');

const newCategory = async (name) => {
  // const result = await Category.findOne({ where: { email } });
  // if (result) {
  //   return { type: 409, message: 'Category already registered' };
  // }
  await Category.create({ name });
  const category = await Category.findOne({ where: { name } });
  return category;
};

module.exports = {
  newCategory,
};