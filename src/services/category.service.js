const { Category } = require('../models');

const newCategory = async (name) => {
  await Category.create({ name });
  const category = await Category.findOne({ where: { name } });
  return category;
};

const findAll= async () => {
  const categorys = await Category.findAll();
  return categorys;
};

module.exports = {
  newCategory,
  findAll,
};