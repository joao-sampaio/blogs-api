const { User } = require('../models');

// const validations = require('../middlewares/validations');

const login = async (email, password) => {
  if (email !== undefined && password !== undefined) {
    const result = await User.findAll({
      where: {email, password}
    });
    console.log(result)
    if (!result) {
      return {
        type: 400,
        message: 'Invalid fields'
      }
    }
    return result;
  } else {
    return {
      type: 400,
      message: 'Some required fields are missing'
    }
  }
};

module.exports = {
  login,
};
