const { User } = require('../models');
const { createToken } = require('../auth/createToken');

// const validations = require('../middlewares/validations');

const findAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const users = result.map((user) => user.dataValues);
  return users;
};

const findById = async (id) => {
  if (!id) {
    return {
      type: 400,
      message: 'Id field are missing',
    };
  }
  const result = await User.findOne({
    attributes: {exclude: ['password']},
    where: {id}
  });
  if (!result) {
    return {
      type: 404,
      message: 'User does not exist'
    }
  }
  return result;
};

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
  const token = createToken({ id: result.id });
  return { token };
};
  
const newUser = async (displayName, email, password, image) => {
  // const {displayName, email, password, image} = data
  const result = await User.findOne({ where: { email } });
  if (result) {
    return { type: 409, message: 'User already registered' };
  }
  await User.create({ displayName, email, password, image });
  const user = await User.findOne({ where: { email } });
  const token = createToken({ id: user.id });
  return { token };
};

module.exports = {
  findAll,
  findById,
  login,
  newUser,
};
