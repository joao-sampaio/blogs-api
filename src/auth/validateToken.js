const jwt = require('jsonwebtoken');

require('dotenv/config');
const { users } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const valToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await users.findById(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  valToken,
};