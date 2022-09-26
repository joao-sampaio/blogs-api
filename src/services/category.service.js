const { Category } = require('../models');

const newCategory = async (name) => {
  await Category.create({ name });
  const category = await Category.findOne({ where: { name } });
  return category;
};

module.exports = {
  newCategory,
};