const { users } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await users.login(email, password);
  if (result.type) {
    res.status(result.type).json({ message: result.message });
  } else {
    res.status(200).json(result);
  }
};

module.exports = {
  login,
};