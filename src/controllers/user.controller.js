const { users } = require('../services');

const login = async (req, res) => {
  try {
    const {email, password} = req.params
    const result = await users.login(email, password);
    if (result.type) {
      res.status(result.type).json({ message: result.message })
    } else {
      res.status(200).json(result);
    }
  } catch (e) {
    res.status(500).json({ message: 'err' });
  }
};

module.exports = {
  login,
};