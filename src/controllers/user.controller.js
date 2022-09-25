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

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await users.newUser(displayName, email, password, image);
  if (result.type) {
    res.status(result.type).json({ message: result.message });
  } else {
    res.status(201).json(result);
  }
};

module.exports = {
  login,
  newUser,
};