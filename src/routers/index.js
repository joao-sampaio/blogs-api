const users = require('./user.router');
const categorys = require('./category.router');
const login = require('./login.router');

module.exports = {
  users,
  login,
  categorys,
};