const { User } = require('../models');
const { createToken } = require('../utils/createToken');

// const validations = require('../middlewares/validations');

const login = async (email, password) => {
  if (!email || !password) {
    return {
      type: 400,
      message: 'Some required fields are missing',
    };
  }
  const result = await User.findOne({ where: { email } });
  if (!result || password !== result.password) {
    return {
      type: 400,
      message: 'Invalid fields',
    };
  }
  const token = createToken({ email });
  return { token };
};

module.exports = {
  login,
};
