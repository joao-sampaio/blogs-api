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
  
const newUser = async (displayName, email, password, image) => {
  // const {displayName, email, password, image} = data
  const result = await User.findOne({ where: { email } });
  console.log(result, 'ssssssssssssssssssssssssssssssssssssssssssssss');
  if (result) {
    return { type: 409, message: 'User already registered' };
  }
  await User.create({ displayName, email, password, image });
  const token = createToken({ displayName, email, image });
  return { token };
};

module.exports = {
  login,
  newUser,
};
