const { categorys } = require('../services');

const newCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categorys.newCategory(name);
  if (result.type) {
    res.status(result.type).json({ message: result.message });
  } else {
    res.status(201).json(result);
  }
};

module.exports = {
  newCategory,
};