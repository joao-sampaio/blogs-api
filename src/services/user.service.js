const { User } = require('../models');

// const validations = require('../middlewares/validations');

const login = async (email, password) => {
  if (!email || !password) {
    return {
      type: 400,
      message: 'Some required fields are missing',
    };
  }
  console.log('testtestestestetstetstetstete');
  // const result = await User.findOne({
  //       where: {email, password}
  //     });

  const result = await User.findOne({ where: { email } });
  console.log(result, email, password, 'sssssssssssssssssssssss');
  if (!result) {
    return {
      type: 400,
      message: 'Invalid fields',
    };
  }
  return result;
};

module.exports = {
  login,
};
