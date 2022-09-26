const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => {
  const { id } = payload;

  const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};